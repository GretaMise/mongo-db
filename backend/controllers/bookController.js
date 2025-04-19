const Book = require('../models/bookModel');

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
// create
exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json({ message: 'Book created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

//atnaujinti knyga PATCH
exports.updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    Object.assign(book, req.body);
    await book.save();
    res.status(201).json({ message: 'Book updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// patch su findByIdandUpdate

// geriau ta pries tai naudoti, labiau straight forward

// exports.updateBook = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
//       // {new: true} - grazina naujai sukurta objekta
//       new: true,
//       // runValidators - tikrina ar musus laukeliai atitinka schema
//       runValidators: true,
//     });

//     if (!updatedBook) {
//       return res.status(404).json({ message: 'Book not found' });
//     }

//     res.status(200).json({ message: 'Book updated successfully' });
//   } catch {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// delete

exports.deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(201).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'Book not found' });
  }
};
