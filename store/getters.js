export default {
  cateFlat: (state) =>
    state.cate
      .map((c) => (c.child ? c.child : c))
      .flat(3)
      .map((c) => (c.child ? c.child : c))
      .flat(3),
  cateGetter:
    (state, { cateFlat }) =>
    (id) =>
      cateFlat.find((c) => c.id == id || c.router == id),
};
