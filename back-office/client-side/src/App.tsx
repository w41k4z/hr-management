/* COMPONENTS */
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SidePanel from "./components/panel/SidePanel";

/* PAGES */
import AllDepartment from "./pages/all-department";
import Needs from "./pages/needs";
import Resume from "./pages/resume";
import Test from "./pages/test";
import PageAddQuestion from "./pages/test/questionadd";
import CritereSelection from "./pages/critere-selection";

/* STYLES */
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/App.css";

/* STATIC DATA */
import { SidePanelContent } from "./static-data/SidePanelContent";
import Annoncce from "./pages/annonce";

/* COMPONENTS */
const sidePanelHeader = (
  <div className="d-flex justify-content-between">
    <h3>HR</h3>
    {/* <h3>Management</h3> */}
  </div>
);
const department = [];

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <SidePanel header={sidePanelHeader} panelItems={SidePanelContent} />
        <div className="content w-100">
          <header
            style={{ height: "50px", backgroundColor: "#babbbb" }}
          ></header>
          <section className="d-flex px-1 justify-content-center">
            <div className="card mt-4 p-sm-1 p-md-5" style={{ width: "90%" }}>
              <Routes>
                {/* Entry point of the application */}
                <Route index element={<p>Entry point</p>} />

                <Route
                  path="/department/all-department"
                  element={<AllDepartment />}
                />
                <Route path="/department/needs" element={<Needs />} />
                <Route path="/forms/resume" element={<Resume />} />
                <Route path="/forms/test" element={<Test />} />
                <Route
                  path="/question/Test/questionaddy"
                  element={<PageAddQuestion />}
                />
                <Route
                  path="/offre/critere"
                  element={<CritereSelection />}
                ></Route>
                <Route path="/offre/annonce" element={<Annoncce />}></Route>

                {/* Error 404 */}
                <Route path="*" element={<p>404 Not Found</p>} />
              </Routes>
            </div>
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
