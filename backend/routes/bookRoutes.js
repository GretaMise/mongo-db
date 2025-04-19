const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET gauti visas knygas (READ)
router.get('/', bookController.getAllBooks);

// POST sukurs naujos knygos irasa (CREATE)

router.post('/', bookController.createBook);

// PATCH atnaujinti knygos duomenis - patch tik detale redaguojam. jei visa, tai naudotume PUT (UPDATE)

router.patch('/:id', bookController.updateBook);

// delete - istrinti knyga (DELETE)

router.delete('/:id', bookController.deleteBook);

// visos CRUD operacijos ^^^

module.exports = router;
