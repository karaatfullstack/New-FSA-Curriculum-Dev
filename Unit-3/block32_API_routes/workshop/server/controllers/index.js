const jwt = require("jsonwebtoken");
const { users, articles } = require("../database/db");

getArticles = () => {
    return articles;
};

createArticle = (title, user) => {
    const id = articles.length + 1;
    const article = {
        id,
        title,
        userId: user.id,
    };
    articles.push(article);
    return article;
};

login = (username, password) => {
    const user = users.find((user) => user.username === username);

    if (!user || password !== "123") {
        return null;
    }
    const token = jwt.sign({ id: user.id, username: user.username }, "secret");

    return {
        id: user.id,
        username,
        token,
    };
};

getUser = (id) => {
    return users.find((user) => user.id === id);
};

module.exports = {
    getArticles,
    createArticle,
    login,
    getUser,
};
