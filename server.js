const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like index.html, CSS, JS)
app.use(express.static(__dirname + "/public"));

// Handle form submission
app.post("/submit-form", (req, res) => {
  const { username, email } = req.body;
  console.log("Form Submitted:", { username, email });

  // You can save it to a database here
  res.status(200).json({ message: "Form submitted successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}:`);
});
