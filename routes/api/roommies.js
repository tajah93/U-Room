const router = require("express").Router();
const controllers = require("../../controllers/controllers");


router.route("/")
  .get(controllers.findAll)
  .post(controllers.create);


router.route("/:id")
  .get(controllers.findById)
  // .put(controllers.update)
  // .delete(controllers.remove);

module.exports = router;