import "./style.less";
import Button from "../../controls/Button";
import { useNavigate } from "react-router-dom";
import { SITE_COLOR, VARIANTS_STATUSES, VARIANTS_TYPES } from "../../static.ts";
import { clearUrl } from "../../functions.ts";
import { Site, TestPT } from "../../../types.ts";

function getDomainThirdLevel(str: string) {
  return str.split(".")[0];
}

type TestItemProps = TestPT & {
  sites: Site[];
};

function TestItem({ id, name, siteId, status, type, sites }: TestItemProps) {
  const navigate = useNavigate(),
    currStatus = VARIANTS_STATUSES[status],
    cUrl = clearUrl(sites[siteId - 1]?.url);

  return (
    <div
      className="TestItem"
      style={{
        borderLeft: `4px solid ${SITE_COLOR[getDomainThirdLevel(cUrl)]}`,
      }}
    >
      <div>{name}</div>
      <div>{VARIANTS_TYPES[type]}</div>
      <div style={{ color: currStatus.color }}>
        {currStatus.textFirstLetter}
      </div>
      <div>{cUrl}</div>

      <Button
        className={`${currStatus.btnText.toLowerCase()}`}
        onClick={() => {
          navigate(`/${currStatus.btnText.toLowerCase()}/${id}`);
        }}
      >
        {currStatus.btnText}
      </Button>
    </div>
  );
}

export default TestItem;
