import express from "express";
import formTalkToUsRoute from "./routes/formTalkToUsRoute";
import formBeVolunteer from "./routes/formBeVolunteerRoute";
import serverMiddlewares from "./middlewares/server";

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

serverMiddlewares(app);

app.use("/api", formTalkToUsRoute);
app.use("/api", formBeVolunteer);
