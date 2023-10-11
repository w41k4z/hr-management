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
  // {
  //   title: "All department",
  //   type: "nav-item",
  //   icon: <FlatColor.FcDepartment />,
  //   path: "department/all-department",
  //   onItemClick: () => {},
  // },
  {
    title: "Needs",
    type: "nav-item",
    icon: <FlatColor.FcSettings />,
    path: "department/needs",
    onItemClick: () => {},
  },
  // {
  //   title: "Criteria needs",
  //   type: "nav-item",
  //   icon: <FlatColor.FcSettings />,
  //   path: "/offre/critere",
  //   onItemClick: () => {},
  // },
  {
    title: "Forms",
    type: "menu-title",
    onItemClick: () => {},
  },
  {
    title: "QCM",
    type: "nav-item",
    path: "/question/Test/questionanswer",
    icon: <FlatColor.FcDocument />,
    onItemClick: () => {},
  },
  {
    title: "Question de test",
    type: "nav-item",
    path: "/question/Test/questionaddy",
    icon: <FlatColor.FcDocument />,
    onItemClick: () => {},
  },
  {
    title: "Entretient passe",
    type: "nav-item",
    path: "/entretient/confirm",
    icon: <FlatColor.FcDocument />,
    onItemClick: () => {},
  },
  {
    title: "List",
    type: "menu-title",
    onItemClick: () => {},
  },
  {
    title: "Resume",
    type: "nav-item",
    path: "list/resume",
    icon: <FlatColor.FcKindle />,
    onItemClick: () => {},
  },
  {
    title: "Inerviewer list",
    type: "nav-item",
    path: "list/able-to-interview",
    icon: <FlatColor.FcKindle />,
    onItemClick: () => {},
  },
  {
    title: "Management",
    type: "menu-title",
    onItemClick: () => {},
  },
  {
    title: "Services",
    type: "nav-item",
    path: "management/services",
    icon: <FlatColor.FcServices />,
    onItemClick: () => {},
  },
  {
    title: "Sectors",
    type: "nav-item",
    path: "management/sectors",
    icon: <FlatColor.FcInspection />,
    onItemClick: () => {},
  },
  {
    title: "Grades",
    type: "nav-item",
    path: "management/grades",
    icon: <FlatColor.FcGraduationCap />,
    onItemClick: () => {},
  },
  {
    title: "Positions",
    type: "nav-item",
    path: "management/positions",
    icon: <FlatColor.FcPodiumWithoutSpeaker />,
    onItemClick: () => {},
  },
  {
    title: "Regions",
    type: "nav-item",
    path: "management/regions",
    icon: <FlatColor.FcRegisteredTrademark />,
    onItemClick: () => {},
  },
  {
    title: "Extra",
    type: "menu-title",
    onItemClick: () => {},
  },
  {
    title: "Fiche de poste",
    type: "nav-item",
    path: "embauche/fichedeposte",
    icon: <FlatColor.FcKindle />,
    onItemClick: () => {},
  },
  {
    title: "Contract",
    type: "nav-item",
    path: "embauche/contrat",
    icon: <FlatColor.FcApproval />,
    onItemClick: () => {},
  },
  // {
  //   title: "Form resume",
  //   type: "nav-item",
  //   path: "/test/resume",
  //   icon: <FlatColor.FcKindle />,
  //   onItemClick: () => {},
  // },

  // {
  //   title: "Annonce",
  //   type: "nav-item",
  //   path: "/offre/annonce",
  //   icon: <FlatColor.FcDocument />,
  //   onItemClick: () => {},
  // },
];
