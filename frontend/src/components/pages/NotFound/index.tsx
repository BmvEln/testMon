import "./style.less";
import Page from "../../layout/Page";
import Button from "../../controls/Button";
import { DASHBOARD_LINK } from "../../static.ts";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Page className="NotFound" textHeading="Not Found">
      <Button onClick={() => navigate(DASHBOARD_LINK)}>Home</Button>
    </Page>
  );
}

export default NotFound;
