import * as FlatColor from "react-icons/fc";

export const SidePanelContent = [
  // {
  //   title: "Dashboard",
  //   type: "nav-item",
  //   icon: <BoxIcon.BiPieChartAlt2 />
  // },
  {
    title: "Department",
    type: "menu-title",
    onItemClick: () => {},
  },
  {
    title: "All department",
    type: "nav-item",
    icon: <FlatColor.FcDepartment />,
    path: "department/all-department",
    onItemClick: () => {},
  },
  {
    title: "Needs",
    type: "nav-item",
    icon: <FlatColor.FcSettings />,
    path: "department/needs",
    onItemClick: () => {},
  },
  {
    title: "Forms",
    type: "menu-title",
    onItemClick: () => {},
  },
  {
    title: "Resume",
    type: "nav-item",
    path: "forms/resume",
    icon: <FlatColor.FcKindle />,
    onItemClick: () => {},
  },
  {
    title: "Test",
    type: "nav-item",
    path: "forms/test",
    icon: <FlatColor.FcDocument />,
    onItemClick: () => {},
  },
];
