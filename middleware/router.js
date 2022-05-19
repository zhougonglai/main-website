import navs from "@/assets/constant/navs";
import menus from "@/assets/constant/menus";
import { findKey } from "lodash";

const activeMenu = (path) =>
  navs.findIndex((nav) => nav.some((n) => path.includes(n)));
const activeNav = (path) => findKey(menus, (menu) => path.includes(menu));

export default function ({ route, store }) {
  // console.log(route.path, activeMenu(route.path));
  store.commit("activeNav", activeNav(route.path));
  store.commit("activeMenu", activeMenu(route.path));
}
