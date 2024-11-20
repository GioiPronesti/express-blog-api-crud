const posts = require("../data/posts.js");

// the logic of crud routs

function index(req, res) {
  router.get("/", (req, res) => {
    res.send("indico tutta la lista dei posts");
  });
}

function show(req, res) {
  router.get("/:id", (req, res) => {
    res.send("mostro il post specifico");
  });
}

function store(req, res) {
  router.post("/", (req, res) => {
    res.send("creo un nuovo post");
  });
}

function update(req, res) {}

function modify(req, res) {}

function destroy(req, res) {}

// export of controller function property

module.exports = { index, show, store, update, modify, destroy };
