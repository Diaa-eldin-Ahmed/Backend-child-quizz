const express = require("express");
const cors = require("cors");
const notFound = require("./src/middleware/notFoundMiddleWare");
const error = require("./src/middleware/errorMiddleWare");
const wordListRoute = require("./src/route/words.route");
const rankRoute = require("./src/route/rank.route");

const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());

// CORS Middleware
server.use(
    cors({
        preflightContinue: true,
        origin: "*",
    })
);

server.use(wordListRoute);
server.use(rankRoute);

// Not Found Middleware
server.use(notFound);

// Error Middleware
server.use(error);

server.listen(PORT, () => {
    console.log("listening on port " + PORT);
});
