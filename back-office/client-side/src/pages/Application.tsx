/* COMPONENTS */
import SidePanel from "../components/panel/SidePanel";
import { BsSearch } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

/* STATIC DATA */
import { SidePanelContent } from "../static-data/SidePanelContent";

/* COMPONENTS */
const sidePanelHeader = (
  <div className="d-flex justify-content-md-evenly justify-content-sm-center">
    <h3>HR</h3>
    <h3 className="d-none d-md-block">Management</h3>
  </div>
);

function Application({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-flex">
      <SidePanel header={sidePanelHeader} panelItems={SidePanelContent} />
      <div className="content w-75">
        <header className="head-nav sticky-top px-md-5 px-sm-2 d-flex justify-content-between align-items-center">
          <div className="search-bar d-flex align-items-center w-25">
            <input
              className="border-less"
              type="search"
              placeholder="Search..."
            />
            <span style={{ fontSize: "25px", color: "white" }} className="ms-2">
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
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Application;
