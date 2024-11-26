import express from "express";
import formTalkToUsRoute from "./routes/formTalkToUsRoute";
import formBeVolunteer from "./routes/formBeVolunteerRoute";
import serverMiddlewares from "./middlewares/server";
import errorHandler from "./middlewares/errorHandler";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5173;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

serverMiddlewares(app);

app.use("/api", formTalkToUsRoute);
app.use("/api", formBeVolunteer);

app.use(errorHandler);
