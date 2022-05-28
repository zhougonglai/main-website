import route from "@/assets/constant/route";
import { find } from "lodash";

const activeNav = (path) => find(route, (r) => path.includes(r.link));

export default function ({ route, store }) {
  store.commit("activeNav", activeNav(route.path));
}
