import Page from "../../layout/Page";
import "./style.less";
import ButtonBack from "../../controls/ButtonBack";
import TestItemTable from "../../blocks/TestItemTable";

function Results() {
  return (
    <Page
      className="Results"
      textHeading="Results"
      subHeading="Order basket redesing"
    >
      <TestItemTable />
      <ButtonBack />
    </Page>
  );
}

export default Results;
