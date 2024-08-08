const router = require("express").Router();
const { showBookById, showJSONAllBooks, showTableAllBooks } = require("../controllers");

router.get("/", (req, res) => {
    res.redirect("ejs/books");
});


router.get("/books", showJSONAllBooks);
router.get("/books/:id", showBookById);
router.get("/ejs/books", showTableAllBooks);


module.exports = router;