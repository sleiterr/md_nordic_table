import multer from "multer";
import { getNewUID } from "./helpers.js";
import * as mime from "mime-types";

// DISH
export const dishStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/dishes");
  },
  filename: function (req, file, cb) {
    const newFileName = getNewUID() + "." + mime.extension(file.mimetype);
    cb(null, newFileName);
  },
});

// USER
export const userStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/users");
  },
  filename: function (req, file, cb) {
    const newFileName = getNewUID() + "." + mime.extension(file.mimetype);
    cb(null, newFileName);
  },
});
