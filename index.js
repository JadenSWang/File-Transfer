import { TODOLIST_APP_PATH } from "paths.js";

const http = require("http");
const fileSystem = require("fs");
const path = require("path");

http.createServer(function (request, response) {
	console.log(request);
}).listen(80);
