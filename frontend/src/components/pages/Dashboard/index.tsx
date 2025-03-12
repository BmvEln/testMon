import Page from "../../layout/Page";
import "./style.less";
import TestItem from "../../blocks/TestItem";
import { useEffect, useRef, useState } from "react";
import Input from "../../controls/Input";
import Button from "../../controls/Button";
import { VARIANTS_STATUSES } from "../../static.ts";
import { clearUrl } from "../../functions.ts";
import { useFetchData } from "../../hooks.ts";
import { TestPT } from "../../../types.ts";

const POS_HEADER_TABLE: { [key: string]: number } = {
  name: 15,
  type: 430,
  status: 555,
  site: 665,
};

// DESC (убывание) (↓) - от большего к меньшему - добавляется знак "-"
// ASC (возрастание) (↑) - от меньшего к большему
const TYPES_SORTS = [
  { name: "Name", sort: "name" },
  { name: "Type", sort: "type" },
  { name: "Status", sort: "status" },
  { name: "Site", sort: "siteId" },
];

function Dashboard() {
  const [tests, sites] = useFetchData(),
    // Из-за этого происходит повторный ререндер?
    [sortedTests, setSortedTests] = useState(tests),
    [search, setSearch] = useState(""),
    filterBySearchTests = (sortedTests as TestPT[]).filter((test: TestPT) =>
      test.name.toLowerCase().includes(search.toLowerCase()),
    ),
    [sortProperty, setSortProperty] = useState(TYPES_SORTS[0].sort),
    sortProps = useRef(Object.values(TYPES_SORTS).map((s) => s.sort));

  useEffect(() => {
    const [sortBy, order] = sortProperty.startsWith("-")
      ? [sortProperty.slice(1), "desc"]
      : [sortProperty, "asc"];

    const sortByStatus = (a: TestPT, b: TestPT) => {
      const vA = VARIANTS_STATUSES[a.status].order;
      const vB = VARIANTS_STATUSES[b.status].order;

      // a < b --- b, a
      if (vA < vB) return order === "desc" ? 1 : -1;

      // a > b --- a, b
      if (vA > vB) return order === "desc" ? -1 : 1;
      return 0;
    };

    const sortBySiteId = (a, b) => {
      const vA = clearUrl(sites[a[sortBy] - 1].url).toLowerCase();
      const vB = clearUrl(sites[b[sortBy] - 1].url).toLowerCase();

      if (vA < vB) return order === "desc" ? 1 : -1;
      if (vA > vB) return order === "desc" ? -1 : 1;
      return 0;
    };

    const sortByProperty = (a, b) => {
      const vA = a[`${sortBy}`].toLowerCase();
      const vB = b[`${sortBy}`].toLowerCase();

      if (vA < vB) return order === "desc" ? 1 : -1;
      if (vA > vB) return order === "desc" ? -1 : 1;
      return 0;
    };

    let sorted;
    if (sortBy === "status") {
      sorted = [...tests].sort(sortByStatus);
    } else if (sortBy === "siteId") {
      sorted = [...tests].sort(sortBySiteId);
    } else {
      sorted = [...tests].sort(sortByProperty);
    }

    setSortedTests(sorted);
  }, [tests, sortProperty]);

  return (
    <Page className="Dashboard" textHeading="Dashboard">
      {!tests.length ? (
        <div className="Dashboard__warn">Loading...</div>
      ) : (
        <>
          <div className="Dashboard__search">
            <Input
              style={{ width: "100%" }}
              placeholder="What test are you looking for?"
              value={search}
              onChange={(v) => setSearch(v)}
              numberFound={filterBySearchTests.length}
            />
          </div>

          {!filterBySearchTests.length ? (
            <>
              <div className="Dashboard__warn">
                Your search did not match any results.
              </div>
              <Button className="results" onClick={() => setSearch("")}>
                Reset
              </Button>
            </>
          ) : (
            <>
              <div className="Dashboard__tableHeader">
                {TYPES_SORTS.map(({ name, sort }, i) => {
                  const isDesc = sortProperty.startsWith("-"),
                    clearSort = sortProperty.startsWith("-")
                      ? sortProperty.slice(1)
                      : sortProperty,
                    methodSort = isDesc ? `${sort}` : `-${sort}`;

                  return (
                    <div
                      key={`${name}-${sort}`}
                      style={{ left: POS_HEADER_TABLE[name.toLowerCase()] }}
                      onClick={() => {
                        sortProps.current = sortProps.current.map((sp) => {
                          if (sort === sp && sp.startsWith("-"))
                            return sp.slice(1);
                          else if (sort === sp && !sp.startsWith("-")) {
                            return "-" + sp;
                          } else if (sort !== sp && sp.startsWith("-")) {
                            return sp.slice(1);
                          } else {
                            return sp;
                          }
                        });

                        setSortProperty(methodSort);
                      }}
                    >
                      <span>{name}</span>

                      <svg
                        style={{
                          transform: sortProps.current[i].startsWith("-")
                            ? "rotate(180deg)" // ↓
                            : "", // ↑
                          opacity: sortProps.current[i].startsWith("-")
                            ? 1
                            : sort === clearSort
                              ? 1
                              : 0,
                          transition: "opacity 0.2s",
                        }}
                        width="7"
                        height="4"
                        viewBox="0 0 7 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-1.7637e-07 3.50001L3.13529 0.364715L3.5 7.09765e-06L3.86471 0.364715L7 3.50001L6.63529 3.86472L3.5 0.729424L0.364708 3.86472L-1.7637e-07 3.50001Z"
                          fill="#999999"
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
              {filterBySearchTests.map((test: TestPT) => (
                <TestItem key={test.id} sites={sites} {...test} />
              ))}
            </>
          )}
        </>
      )}
    </Page>
  );
}

export default Dashboard;
