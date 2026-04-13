import express from 'express';
import { assignmentSettings } from '../../../db/mcd/misc/settings.js';

const indexRouter = express.Router();
// Index

indexRouter.get("", (req, res) => {

    res.redirect('/www');
});



indexRouter.get("/mcd/", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(assignmentSettings));
});

export default indexRouter;