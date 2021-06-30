const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');

const db = require(`./database/db.js`);
const booksRouter = require('./routes/booksRouter');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'Mongoose connection error:'));

app.get('/', (req, res) => {
  res.send('Server up');
});
app.use('/api', booksRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
