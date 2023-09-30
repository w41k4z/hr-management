/* COMPONENTS */
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SidePanel from "./components/panel/SidePanel";
import { BsSearch } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

/* PAGES */
import AllDepartment from "./pages/all-department";
import Needs from "./pages/needs";
import Resume from "./pages/client-side-page/resume";
import ListResume from "./pages/list/resume";
import PageAddQuestion from "./pages/test/questionadd";
import CritereSelection from "./pages/critere-selection";

/* INTERFACES */
import Region from "./model/RegionInterface";

/* STYLES */
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/App.css";

/* STATIC DATA */
import { SidePanelContent } from "./static-data/SidePanelContent";
import Annonce from "./pages/annonce";
import { useEffect, useState } from "react";

/* COMPONENTS */
const sidePanelHeader = (
  <div className="d-flex justify-content-md-evenly justify-content-sm-center">
    <h3>HR</h3>
    <h3 className="d-none d-md-block">Management</h3>
  </div>
);
const department = [];

function App() {
  /* HOOKS */
  const [allRegion, setAllRegion] = useState<Region[]>([]);
  useEffect(() => {
    if (allRegion.length === 0) {
      fetch("http://localhost:8080/Region/getAll")
        .then((res) => res.json())
        .then((data) => setAllRegion(data));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="d-flex">
        <SidePanel header={sidePanelHeader} panelItems={SidePanelContent} />
        <div className="content w-100">
          <header className="head-nav sticky-top px-md-5 px-sm-2 d-flex justify-content-between align-items-center">
            <div className="search-bar d-flex align-items-center w-25">
              <input
                className="border-less"
                type="search"
                placeholder="Search..."
              />
              <span
                style={{ fontSize: "25px", color: "white" }}
                className="ms-2"
              >
                <BsSearch />
              </span>
            </div>
            <div className="profile">
              <button className="btn btn-danger d-flex align-items-center">
                <span>
                  <FiLogOut />
                </span>
                <span className="d-none ms-md-2 d-md-block">Log out</span>
              </button>
            </div>
          </header>
          <section className="d-flex flex-wrap px-1 justify-content-center">
            <div className="card mt-4 p-sm-1 p-md-3" style={{ width: "90%" }}>
              <Routes>
                {/* Entry point of the application */}
                <Route index element={<p>Entry point</p>} />

                <Route
                  path="/department/all-department"
                  element={<AllDepartment />}
                />
                <Route path="/department/needs" element={<Needs />} />

                <Route
                  path="/forms/resume"
                  element={<Resume regions={allRegion} />}
                />

                <Route path="/list/resume" element={<ListResume />} />

                <Route
                  path="/question/Test/questionaddy"
                  element={<PageAddQuestion />}
                />

                <Route
                  path="/offre/critere"
                  element={<CritereSelection />}
                ></Route>
                <Route path="/offre/annonce" element={<Annonce />}></Route>

                {/* Client side page test */}

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
