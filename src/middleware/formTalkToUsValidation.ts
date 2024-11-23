import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const formTalkToUsValidation = [
    body('name').notEmpty().withMessage("O campo nome é obrigatório!"),
    body('email').isEmail().withMessage("Digite um e-mail válido!"),
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

export default formTalkToUsValidation;