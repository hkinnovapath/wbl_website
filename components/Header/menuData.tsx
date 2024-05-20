import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  // {
  //   id: 2,
  //   title: "About",
  //   path: "/about",
  //   newTab: false,
  // },
  // {
  //   id: 33,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 3,
    title: "Schedule",
    path: "/schedule",
    newTab: false,
  },
  {
    id: 4,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Recordings Page",
        path: "/recording",
        newTab: false,
      },
      {
        id: 42,
        title: "Presentation Page",
        path: "/presentation",
        newTab: false,
      },
      {
        id: 43,
        title: "Assignments Page",
        path: "/assignment",
        newTab: false,
      },     
    ],
  },
  {
    id: 5,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
