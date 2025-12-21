const express = require("express");

const app = express();

app.use(express.json());

const PORT = 8000 || 3000;

const books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" },
];

// Routes
app.get("/books", (req, res) => {
  return res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Id must be  of type number" });
  }

  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({
      error: "Book does not exist",
    });
  }

  res.status(200).json(book);
});

app.post("/books/add-book", (req, res) => {
  const { title, author } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "title is required" });
  }

  if (!author || author.trim() === "") {
    return res.status(400).json({ error: "author is required" });
  }

  const id = books.length + 1;

  const book = { id, title, author };
  books.push(book);

  return res.status(201).json({ message: "Book created successfully" });
});

app.delete("books/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (!id) {
    return res.status(400).json({ error: "book id is required" });
  }

  const deleteBookId = books.find((b) => b.id === id);

  if (!deleteBookId) {
    return res.status(404).json({
      error: "Book does not exist",
    });
  }

  books.splice(deleteBookId, 1);

  return res.status(200).json({
    message: "Book deleted",
  });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
