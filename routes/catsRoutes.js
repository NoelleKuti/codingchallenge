import express from "express";
import { addCat, editCat, deleteCat, viewCats } from '../controllers/catsController.js'

const router = express.Router();

router.route("/").post(addCat).get(viewCats)

router.route('/:id').patch(editCat).delete(deleteCat)

export default router