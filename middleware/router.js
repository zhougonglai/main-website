const nav = [
  ["service"],
  ["production"],
  ["maintenance", "openfile"],
  ["about", "honorary"],
  ["joinus"],
];
const activeNav = (path) =>
  nav.findIndex((nav) => nav.some((n) => path.includes(n)));

export default function ({ route, store }) {
  console.log(route.path);
  return store.commit("activeNav", activeNav(route.path));
}
