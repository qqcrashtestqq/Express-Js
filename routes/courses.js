const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("courses", {
    title: "Страница с курсами",
    isCourses: true,
  });
});

module.exports = router;
