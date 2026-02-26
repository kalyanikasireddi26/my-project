
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/smartportal');

const RequestSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  priority: String,
  status: { type: String, default: "Open" },
  requesterName: String,
  requesterEmail: String,
  createdAt: { type: Date, default: Date.now }
});

const Request = mongoose.model('Request', RequestSchema);

app.post('/requests', async (req, res) => {
  const request = new Request(req.body);
  await request.save();
  res.json(request);
});

app.get('/requests', async (req, res) => {
  const filters = req.query;
  const requests = await Request.find(filters);
  res.json(requests);
});

app.put('/requests/:id/status', async (req, res) => {
  const updated = await Request.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(updated);
});

app.listen(5000, () => console.log("Request Service running on port 5000"));
