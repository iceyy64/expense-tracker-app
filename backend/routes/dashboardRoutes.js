const express = require("express")
const { protect } = require("../middleware/authMIddleware")
const { getDashboardData } = require("../controllers/dahsboardController")

const router = express.Router()

router.get("/", protect, getDashboardData)

module.exports = router