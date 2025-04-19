const mongoose = require('mongoose');

// Schema - tai yra objektas, kuris apraso kaip atrodys musu duomenys duomenu bazeje. Tai yra pagrindas, pagal kuri bus sukurtos musu lenteles.

const bookSchema = new mongoose.Schema(
  {
    title: {
      // type - nurodome, koks bus duomenu tipas
      type: String,
      // required- pasakome, kad privalomas laukelis
      required: true,
      // trim - pasalina nereikalingus tarpus
      trim: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    // nurodau, kuria kolekcija noriu naudoti duomenu bazeje
    collection: 'books',
    // nurodau, kad noriu, jog sukurtu createdAt ir updatedAt laukelius automatiskai
    timestamps: true,
    // nerodom __v lauko
    versionKey: false,
  }
);

module.exports = mongoose.model('Book', bookSchema);
