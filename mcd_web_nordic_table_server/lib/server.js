// Server Modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routes
import indexRouter from "./routes/mcd/www/index.route.js";
import authRouter from "./routes/auth/auth.js";
import authTokenRouter from "./routes/auth/token.js";
import userRouter from "./routes/users/user.route.js";
import usersRouter from "./routes/users/users.route.js";
import dishRouter from "./routes/dishes/dish.route.js";
import dishesRouter from "./routes/dishes/dishes.route.js";
import bookingRouter from "./routes/bookings/booking.route.js";
import bookingsRouter from "./routes/bookings/bookings.route.js";

const expressServer = express();

expressServer.use(bodyParser.json());
expressServer.use(bodyParser.urlencoded({ extended: true }));
expressServer.use(cors());
expressServer.use(cookieParser());

// Serve static files
expressServer.use(express.static("[mcd]"));
expressServer.use(express.static("public"));

/*

  Routes

*/

// Index / MCD Routes
expressServer.use(indexRouter);

// Auth Routes
expressServer.use(authRouter);
expressServer.use(authTokenRouter);

// Users Routes
expressServer.use(usersRouter);
expressServer.use(userRouter);

// Dishes Routes
expressServer.use(dishRouter);
expressServer.use(dishesRouter);

// Booking Routes
expressServer.use(bookingRouter);
expressServer.use(bookingsRouter);

export default expressServer;
