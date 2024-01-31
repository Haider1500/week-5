const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/user");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 4000;
app.use(bodyParser.json());
app.use("/user", router);

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});
