const jwt = require("jsonwebtoken");
const { users, articles } = require("../database/db");

getArticles = () => {
    return articles;
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

createArticle = (title, username) => {
    const id = articles.length + 1;
    const newArticle = {
        id,
        title,
        username
    };

    articles.push(newArticle);

    return newArticle;
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
