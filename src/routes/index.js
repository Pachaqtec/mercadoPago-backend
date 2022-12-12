// archivo de rutas

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ titulo: "Hello Word" });
});
router.get("/test", (req, res) => {
  const data = {
    name: "Sumilda",
    website: " ww.macu.com",
  };
  res.json(data);
});

module.exports = router;
