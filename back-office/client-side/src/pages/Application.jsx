/* COMPONENTS */
import SidePanel from "../components/panel/SidePanel";
import { BsSearch } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

/* STATIC DATA */
import { SidePanelContent } from "../static-data/SidePanelContent";
import { useEffect, useState } from "react";

/* COMPONENTS */
const sidePanelHeader = (
  <div className="d-flex justify-content-md-evenly justify-content-sm-center">
    <h3>HR</h3>
    <h3 className="d-none d-md-block">Management</h3>
  </div>
);

function Application({ children }) {
  const [sidePanelItems, setSidePanelItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const jsonUser = localStorage.getItem("user");
    const user = jsonUser ? JSON.parse(jsonUser) : "";
    const items = SidePanelContent;
    for (const item of items) {
      if (item.onlyAdmin) {
        if (user.privilege > 50) {
          item.onlyAdmin = !item.onlyAdmin;
        }
      }
    }
    setSidePanelItems(items);
  }, [sidePanelItems]);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="d-flex">
      <SidePanel header={sidePanelHeader} panelItems={sidePanelItems} />
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
            <button
              onClick={logout}
              className="btn btn-danger d-flex align-items-center"
            >
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
