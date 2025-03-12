import "./style.less";
import Page from "../../layout/Page";
import ButtonBack from "../../controls/ButtonBack";
import TestItemTable from "../../blocks/TestItemTable";

function Finalize() {
  return (
    <Page
      className="Finalize"
      textHeading="Finalize"
      subHeading="Spring promotion"
    >
      <TestItemTable />
      <ButtonBack />
    </Page>
  );
}

export default Finalize;
