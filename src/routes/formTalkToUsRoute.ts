import { Router } from "express";
import formValuesValidation from "../middleware/formValuesValidation";
import formTalkToUsController from "../controllers/formTalkToUsController";

const router = Router();

router.post("/fale-conosco", formValuesValidation, formTalkToUsController.index);

export default router;