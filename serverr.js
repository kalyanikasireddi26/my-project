
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const SECRET = "smartportalkey";

app.post('/login', (req, res) => {
    const { email } = req.body;
    const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
    res.json({ token });
});

app.listen(4000, () => console.log("Auth Service running on port 4000"));
