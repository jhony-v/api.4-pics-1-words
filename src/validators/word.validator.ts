import { body, query } from "express-validator";

export const useValidatorWordId = () => [
  query("id").notEmpty().withMessage("Not id received"),
];

export const useValidatorWordCreateNew = () => [
  body("iduser").notEmpty().withMessage("The id of user no is received"),
  body("letters").trim().notEmpty().isLength({ min: 3 }).withMessage("The min length of letter is 3"),
  body("iduser").trim().notEmpty().withMessage("Not id received"),
  body("images").isArray({ min: 4, max: 4 }).withMessage("Not images array received"),
  body("dateCreated").notEmpty().isDate().withMessage("Not date"),
];
