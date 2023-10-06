/* COMPONENTS */
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SidePanel from "./components/panel/SidePanel";
import { BsSearch } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

/* PAGES */
import Resume from "./pages/client-side-page/resume";
import PageAddQuestion from "./pages/test/questionadd";
import CritereSelection from "./pages/critere-selection";
import Annonce from "./pages/annonce";

/* INTERFACES */
import Region from "./model/RegionInterface";
import Service from "./model/ServiceInterface";

/* STYLES */
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/App.css";

/* STATIC DATA */
import { SidePanelContent } from "./static-data/SidePanelContent";
import { useEffect, useState } from "react";
import PageAnswerQuestion from "./pages/test/answerquestion";

/* COMPONENTS */
const sidePanelHeader = (
  <div className="d-flex justify-content-md-evenly justify-content-sm-center">
    <h3>HR</h3>
    <h3 className="d-none d-md-block">Management</h3>
  </div>
);

function App() {
  /* HOOKS */
  const [allRegion, setAllRegion] = useState<Region[]>([]);
  const [allService, setAllService] = useState<Service[]>([]);
  useEffect(() => {
    if (allRegion.length === 0) {
      fetch("http://localhost:8080/Region/getAll")
        .then((res) => res.json())
        .then((data) => setAllRegion(data));
      fetch("http://localhost:8080/Service/getAll")
        .then((res) => res.json())
        .then((data) => setAllService(data));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="card">
        <div className="card-body content w-100">
          <section className="d-flex flex-wrap px-1 justify-content-center">
            <div className="card mt-4 p-sm-1 p-md-3" style={{ width: "90%" }}>
              <Routes>
                {/* Entry point of the application */}
                <Route index element={<p>Entry point</p>} />

                <Route
                  path="/forms/resume"
                  element={<Resume regions={allRegion} />}
                />

                <Route
                  path="/offre/critere"
                  element={<CritereSelection />}
                ></Route>

                <Route path="/offre/annonce" element={<Annonce />}></Route>

                {/* Client side page test */}
                <Route
                  path="/question/Test/questionanswer"
                  element={<PageAnswerQuestion />}
                />

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
