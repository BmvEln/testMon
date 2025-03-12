import "./App.less";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Results from "./components/pages/Results";
import Dashboard from "./components/pages/Dashboard";
import Finalize from "./components/pages/Finalize";
import NotFound from "./components/pages/NotFound";
import {
  DASHBOARD_LINK,
  FINALIZE_LINK,
  RESULTS_LINK,
} from "./components/static.ts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path={DASHBOARD_LINK} element={<Dashboard />} />
          <Route path={`${RESULTS_LINK}/:id`} element={<Results />} />
          <Route path={`${FINALIZE_LINK}/:id`} element={<Finalize />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
