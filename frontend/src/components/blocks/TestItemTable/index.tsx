import "./style.less";
import { clearUrl } from "../../functions.ts";
import { VARIANTS_STATUSES, VARIANTS_TYPES } from "../../static.ts";
import { useParams } from "react-router-dom";
import { Site, TestPT } from "../../../types.ts";
import { useEffect, useState } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";

function Skeleton() {
  return (
    <ContentLoader
      speed={1}
      width={305}
      height={124}
      viewBox="0 0 305 124"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="305" height="124" />
    </ContentLoader>
  );
}

function TestItemTable() {
  const { id } = useParams(),
    [test, setTest] = useState<TestPT>(),
    [site, setSite] = useState<Site>();

  useEffect(() => {
    async function fetchTestAndSite() {
      try {
        // Первый запрос: получаем тест
        const fetchedTest = await axios
          .get(`http://localhost:3100/tests/${id}`)
          .then((res) => res.data);

        setTest(fetchedTest);

        // Второй запрос: получаем сайт на основе siteId из теста
        if (fetchedTest.siteId) {
          await axios
            .get(`http://localhost:3100/sites/${fetchedTest.siteId}`)
            .then((res) => setSite(res.data));
        }
      } catch (err) {
        console.log("Ошибка получения данных test и site:", err);
      }
    }

    fetchTestAndSite();
  }, [id]);

  return (
    <>
      {!site?.url || !test ? (
        <Skeleton />
      ) : (
        <div className="TestItemTable">
          <div>Name</div>
          <div>{test?.name}</div>
          <div>Type</div>
          <div>{VARIANTS_TYPES[test?.type]}</div>
          <div>Status</div>
          <div style={{ color: VARIANTS_STATUSES[test?.status].color }}>
            {VARIANTS_STATUSES[test?.status].textFirstLetter}
          </div>
          <div>Site</div>
          <div>{clearUrl(site?.url)}</div>
        </div>
      )}
    </>
  );
}

export default TestItemTable;
