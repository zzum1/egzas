const express = require("express");
const { replyToTicket, closeTicket } = require("../controllers/replyController");
const auth = require('../middleware/authentication')

const router = express.Router()

router.post("/:id/reply", auth, replyToTicket)
router.patch("/:id/close", auth, closeTicket)

module.exports = router

