import { Router } from "express";
import formBeVolunteerValidation from "../middlewares/formBeVolunteerValidation";
import formBeVolunteerController from "../controllers/formBeVolunteerController";

const router = Router();

router.post("/seja-voluntario", formBeVolunteerValidation, formBeVolunteerController.index);

export default router;