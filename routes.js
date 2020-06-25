const router = require('express').Router();


router.use("/", require('./routes/index'));
router.use("/add", require('./routes/add'));
router.use("/edit",require('./routes/edit'));
router.use("/delete",require('./routes/delete'));
router.use("/api",require('./routes/api'));


module.exports =router;