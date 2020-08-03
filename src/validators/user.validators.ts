import { body, query } from "express-validator";

export const useValidationUserVerification = () => [
    body("username").trim().notEmpty().isLength({ min: 5 }).withMessage('The username not have the min length'),
    body("pass").trim().notEmpty().withMessage('Enter a password'),
];
  

export const useValidationUserUpdate = () => [
    query("id").notEmpty().withMessage('Not id received')
]