import { Router } from "express";
import formTalkToUsController from "../controllers/formTalkToUsController";
import formTalkToUsValidation from "../middlewares/formTalkToUsValidation";

const router = Router();

router.post("/fale-conosco", formTalkToUsValidation, formTalkToUsController.index);

export default router;