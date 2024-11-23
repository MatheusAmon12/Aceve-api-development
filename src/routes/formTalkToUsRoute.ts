import { Router } from "express";
import formValuesValidation from "../middleware/formValuesValidation";
import formTalkToUsController from "../controllers/formTalkToUsController";

const router = Router();

router.get("/fale-conosco", formValuesValidation, formTalkToUsController.index);

export default router;