import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const formBeVolunteerValidation = [
    body('name').notEmpty().withMessage("O campo nome é obrigatório!"),
    body('dateOfBirth').notEmpty().withMessage("Digite uma data válida!"),
    body('phone').isNumeric().withMessage("O campo de telefone!"),
    body('email').isEmail().withMessage("Digite um e-mail válido!"),
    body('availability').notEmpty().withMessage("O campo disponibilidade é obrigatório!"),
    body('interestArea').notEmpty().withMessage("O campo área de interesse é obrigatório!"),
    body('message').notEmpty().withMessage("O campo mensagem é obrigatório!"),
    async(req: Request, res: Response, next: NextFunction): Promise<void> => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        return next();
    }
]

export default formBeVolunteerValidation;