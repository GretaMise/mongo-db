const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

// .env failas nuo zodzio environment - aplinka. tai tiesiog paprastas tekstinis failas, kuriame saugome kintamuosius, kuriu nenorime, kad kiti turetu. Dazniausiai tai yra slapta informacija, duomenu bazes prisijungimai, port ar kokie nors slaptazodziai.
dotenv.config();

const PORT = process.env.PORT || 3008;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);

// mongoose - biblioteka, kuri leidzia sukurti rysi tarp serverio ir mongoDB duomenu bazes
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB Atlas', error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
