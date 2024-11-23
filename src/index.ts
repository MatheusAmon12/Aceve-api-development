import express from "express";
import formValuesValidation from "./middleware/formValuesValidation";
import formTalkToUsController from "./controllers/formTalkToUsController";

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.post("/api/fale-conosco", formValuesValidation, formTalkToUsController.index);