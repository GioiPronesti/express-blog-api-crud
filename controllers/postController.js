const posts = require("../data/posts.js");

// the logic of crud routs

function index(req, res) {
  res.send("indico tutta la lista dei posts");
}

function show(req, res) {
  res.send("mostro il post specifico");
}

function store(req, res) {
  res.send("creo un nuovo post");
}

function update(req, res) {
  res.send("aggiorno un post preciso");
}

function modify(req, res) {
  res.send("modifico un post preciso");
}

function destroy(req, res) {
  res.send("elimino un post preciso");
}

// export of controller function property

module.exports = { index, show, store, update, modify, destroy };
