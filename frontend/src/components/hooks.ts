import { useEffect } from "react";
import axios from "axios";
import { setTests } from "../redux/slices/testsSlice.tsx";
import { setSites } from "../redux/slices/sitesSlice.tsx";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store.tsx";

export function useFetchData() {
  const dispatch = useAppDispatch();
  const { tests } = useAppSelector((state: RootState) => state.tests);
  const { sites } = useAppSelector((state: RootState) => state.sites);

  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:3100/tests"),
        axios.get("http://localhost:3100/sites"),
      ])
      .then(
        axios.spread((tests, sites) => {
          dispatch(setTests(tests.data));
          dispatch(setSites(sites.data));
        }),
      );
  }, []);

  return [tests, sites];
}
