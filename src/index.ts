import express from "express";
import formTalkToUsRoute from "./routes/formTalkToUsRoute";
import formBeVolunteer from "./routes/formBeVolunteerRoute";

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use(express.json());
app.use("/api", formTalkToUsRoute);
app.use("/api", formBeVolunteer);
