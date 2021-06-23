const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => Console.log(`Server running on port ${PORT}`));
