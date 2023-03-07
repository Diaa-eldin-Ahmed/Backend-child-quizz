const express = require("express");
const cors = require("cors");
const notFound = require("./middleware/notFoundMiddleWare");
const error = require("./middleware/errorMiddleWare");
const wordListRoute = require("./../src/route/words.route");
const rankRoute = require("./../src/route/rank.route");

const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());

// CORS Middleware
server.use(
    cors({
        origin: [
            "https://children-quizz-vite.vercel.app/",
            "http://127.0.0.1:5173/",
        ],
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
