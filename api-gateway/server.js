
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors());

app.use('/auth', createProxyMiddleware({ target: 'http://localhost:4000', changeOrigin: true }));
app.use('/requests', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));

app.listen(3000, () => console.log("API Gateway running on port 3000"));
