import * as BoxIcon from "react-icons/bi";

export const AdminSidePanelContent = [
  // {
  //   title: "Dashboard",
  //   type: "nav-item",
  //   icon: <BoxIcon.BiPieChartAlt2 />
  // },
  {
    title: "About",
    type: "menu-title",
    onItemClick: () => {},
  },
  {
    title: "Informations",
    type: "nav-item",
    icon: <BoxIcon.BiInfoCircle />,
    path: "/society/info",
    onItemClick: () => {},
  },
  {
    title: "Files",
    type: "nav-item",
    icon: <BoxIcon.BiFile />,
    path: "/society/files",
    onItemClick: () => {},
  },
  {
    title: "Chart of Accounts",
    type: "menu-title",
    onItemClick: () => {},
  },
  {
    title: "General",
    type: "nav-item",
    path: "/society/chart-of-account/general",
    icon: <BoxIcon.BiRectangle />,
    onItemClick: () => {},
  },
  {
    title: "Third party",
    type: "nav-item",
    path: "/society/chart-of-account/third-party",
    icon: <BoxIcon.BiPyramid />,
    onItemClick: () => {},
  },
  {
    title: "Journal",
    type: "menu-title",
    onItemClick: () => {},
  },
  {
    title: "Code",
    type: "nav-item",
    path: "/society/journal/code",
    icon: <BoxIcon.BiQr />,
    onItemClick: () => {},
  },
  {
    title: "Transaction record",
    type: "nav-item",
    path: "/society/journal/transaction-record",
    icon: <BoxIcon.BiReceipt />,
    onItemClick: () => {},
  },
  {
    title: "Accounting",
    type: "menu-title",
    onItemClick: () => {},
  },
  {
    title: "General legder",
    type: "nav-item",
    path: "/society/general-ledger",
    icon: <BoxIcon.BiBook />,
    onItemClick: () => {},
  },
  {
    title: "Financial statements",
    type: "nav-item",
    path: "/society/financial-statement",
    icon: <BoxIcon.BiMoney />,
    onItemClick: () => {},
  },
];