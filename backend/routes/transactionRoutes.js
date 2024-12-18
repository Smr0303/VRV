const express = require("express");
const router = express.Router();

const { checkUserAuthentication, checkAdminPrivileges } = require("../middlewares/authMiddleware");

const {
  createTransaction,
  fetchTransaction,
  getReport,
  searchTransaction,
  fetchAllTransactions,
  getSummary,
  getTransactionReport,
} = require("../controllers/transactionController");

router.route("/addTransaction").post(checkUserAuthentication,checkAdminPrivileges(5,4),createTransaction);
router.route("/getTransaction/:transactionId").get(fetchTransaction);

router.route("/searchTransaction").get(searchTransaction);
router.route("/allTransactions").get(fetchAllTransactions);

router.route("/getSummary").get(getSummary);
router.route("/getTransactionReport").get(getTransactionReport);

module.exports = router;
