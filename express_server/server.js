const express = require("express");
const db = require("./src/db/database");
const app = express();
const cors = require("cors");
const userRouter = require("./src/routes/user.route");
const candidateRouter = require("./src/routes/candidate.route");

app.use(express.json());
app.use(cors({ origin: true }));

app.use("/api", userRouter);
app.use("/api", candidateRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
