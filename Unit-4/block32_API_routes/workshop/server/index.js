const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8080;
const { getArticles, login, createArticle } = require("./controllers/index");
const authMiddleware = require("./middleware/authMiddleware");
app.use(bodyParser.json());

app.get("/articles", (req, res) => {
  try {
    const articles = getArticles();
    res.send(articles);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});

app.post("/articles", authMiddleware, (req, res) => {
  try {
    const article = createArticle(req.body.title, req.body.content, req.user);
    res.send(article);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});

app.post("/login", (req, res) => {
  try {
    const user = login(req.body.username, req.body.password);
    if (!user) {
      return res.status(422).json({ error: "Incorrect email or password" });
    }
    res.send(user);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});

// app.listen(PORT, () => {
//   console.log("server started on port " + PORT);
// });

module.exports = app;