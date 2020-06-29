const PATHS = require("./paths.js");
const URIS = require("./uris.js");

const express = require("express");
const app = express();

for (let i = 0; i < PATHS.length; i++) {
	app.get("/" + URIS[i], (req, res) => {
		res.download(PATHS[i]);
	});
}

app.listen(8000, () => {
	console.log("Example app listening on port 8000!");
});
