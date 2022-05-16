export default (req, res) => {
  res.status(200).json({
    query: req.query,
    cookies: req.cookies,
    body: req.body,
  });
};
