const nav = [
  ["service"],
  ["production"],
  ["maintenance", "openfile"],
  [],
  ["joinus"],
];
const activeNav = (path) =>
  nav.findIndex((nav) => nav.some((n) => path.includes(n)));

export default function ({ route, store }) {
  console.log(route.path);
  return store.commit("activeNav", activeNav(route.path));
}
