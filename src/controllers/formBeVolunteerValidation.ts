import { Request, Response } from "express";
import sendEmail from "../lib/sendEmail";

const formBeVolunteerController = {
    index: (req: Request, res: Response) => {
        const {
            name,
            dataOfBirth,
            phone,
            email,
            availability,
            interestArea,
            message
        } = req.body;

        try {
            sendEmail(
                name, 
                dataOfBirth, 
                phone, 
                email, 
                availability, 
                interestArea, 
                message
            );
        }
    }
};