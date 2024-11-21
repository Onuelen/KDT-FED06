export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", home: "Home" });
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");

export const see = (req, res) => {
  return res.render("watch", { pageTitle: "Watch" });
};
export const edit = (req, res) => {
  return res.render("123");
};
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
