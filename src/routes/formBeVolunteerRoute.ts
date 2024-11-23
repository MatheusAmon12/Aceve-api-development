import { Router } from "express";
import formBeVolunteerValidation from "../middleware/formBeVolunteerValidation";
import formTalkToUsController from "../controllers/formTalkToUsController";

const router = Router();

router.post("/seja-voluntario", formBeVolunteerValidation, formTalkToUsController.index);

export default router;