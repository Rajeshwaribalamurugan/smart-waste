const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const { uploadWaste, getWasteItems } = require("../controllers/wasteController");

router.post("/upload", upload.single("image"), uploadWaste);
router.get("/all", getWasteItems);

module.exports = router;
