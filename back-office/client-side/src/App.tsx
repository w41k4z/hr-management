/* COMPONENTS */
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

/* PAGES */
import Needs from "./pages/needs";
import ListResume from "./pages/list/resume";
import ListInterview from "./pages/list/list-to-interview";
import PageAddQuestion from "./pages/test/questionadd";
import CritereSelection from "./pages/critere-selection";
import Annonce from "./pages/annonce";
import Services from "./pages/management/services";
import Sectors from "./pages/management/sectors";
import Grades from "./pages/management/grades";
import Positions from "./pages/management/positions";
import Regions from "./pages/management/regions";
import FicheDePoste from "./pages/fiche-de-poste";
import Contract from "./pages/contract";
import Employment from "./components/employment/Employment";
import Payroll from "./pages/payroll";
import PageAnswerQuestion from "./pages/test/answerquestion";
import Conge from "./pages/conge";
import WageSlip from "./components/wage-slip/WageSlip";
import HeureSupp from "./pages/management/heure-supp";
import Application from "./pages/Application";

/* STYLES */
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/App.css";
import LogIn from "./pages/auth/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Entry point of the application */}
        <Route index element={<LogIn />} />
        <Route
          path="/department/needs"
          element={<Application children={<Needs />} />}
        />

        <Route
          path="/list/resume"
          element={<Application children={<ListResume />} />}
        />
        <Route
          path="/list/able-to-interview"
          element={<Application children={<ListInterview />} />}
        />

        <Route
          path="/management/services"
          element={<Application children={<Services />} />}
        />
        <Route
          path="/management/sectors"
          element={<Application children={<Sectors />} />}
        />
        <Route
          path="/management/grades"
          element={<Application children={<Grades />} />}
        />
        <Route
          path="/management/positions"
          element={<Application children={<Positions />} />}
        />
        <Route
          path="/management/regions"
          element={<Application children={<Regions />} />}
        />
        <Route
          path="/management/heure-supp"
          element={<Application children={<HeureSupp />} />}
        />

        <Route
          path="/question/Test/questionaddy"
          element={<Application children={<PageAddQuestion />} />}
        />

        <Route
          path="/offre/critere"
          element={<Application children={<CritereSelection />} />}
        ></Route>

        <Route
          path="/offre/annonce"
          element={<Application children={<Annonce />} />}
        ></Route>

        {/* Client side page test */}
        <Route
          path="/question/Test/questionanswer"
          element={<Application children={<PageAnswerQuestion />} />}
        />

        <Route
          path="/embauche/fichedeposte"
          element={<Application children={<FicheDePoste />} />}
        />
        <Route
          path="/embauche/contrat"
          element={<Application children={<Contract />} />}
        />
        <Route path="/conge" element={<Application children={<Conge />} />} />
        <Route
          path="/employment/confirm"
          element={<Application children={<Employment />} />}
        />
        <Route
          path="/pay/payroll"
          element={<Application children={<Payroll />} />}
        />

        <Route
          path="/wage/wageslip"
          element={<Application children={<WageSlip />} />}
        />

        {/* Error 404 */}
        <Route
          path="*"
          element={<Application children={<p>404 Not Found</p>} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
