const posts = require("../data/posts.js");

// the logic of crud routs

/*Ora passiamo ad implementare le logiche delle nostre CRUD:
Index dovrà restituire la lista dei post in formato JSON
Show dovrà restituire un singolo post in formato JSON
Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.
Bonus
Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
In Index e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
Sia per la show che per la destroy fate funzionare le due API anche quando viene inviato come parametro :id lo slug del post (senza registrare nuove rotte)*/

function index(req, res) {
  const listPost = posts;

  res.json(listPost);
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
