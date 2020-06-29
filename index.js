const PATHS = require("./paths.js");
const URIS = require("./uris.js");

const express = require("express");
const app = express();

for (let i = 0; i < PATHS.length; i++) {
	app.get("/" + URIS[i], (req, res) => {
		res.download(PATHS[i]);
	});
}

const port = 8000;
app.listen(port, () => {
	console.log("Example app listening on port " + port + "!");
});
