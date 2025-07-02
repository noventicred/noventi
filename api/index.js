const express = require("express");
const cors = require("cors");
const pixRoute = require("./pix");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/pix", pixRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API Pix rodando em http://localhost:${PORT}/api/pix`);
});
