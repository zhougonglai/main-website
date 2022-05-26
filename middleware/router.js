import navs from "@/assets/constant/navs";
import menus from "@/assets/constant/menus";
import { findKey } from "lodash";

const activeNav = (path) => findKey(menus, (menu) => path.includes(menu));
const activeMenu = (path) =>
  navs.findIndex((nav) => nav.some((n) => path.includes(n)));

export default function ({ route, store }) {
  console.log(
    "route change",
    route.path,
    "activeNav",
    activeNav(route.path),
    "activeMenu",
    activeMenu(route.path)
  );
  store.commit("activeNav", activeNav(route.path));
  store.commit("activeMenu", activeMenu(route.path));
}
