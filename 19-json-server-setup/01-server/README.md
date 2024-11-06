# json-server

1. node environment : `npm init -y`
2. json-server install : `npm install json-server`
3. Create `db.json` file
4. create `server.js`

```js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
	console.log("Request received");
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

server.use(router);
server.listen(3001, () => {
	console.log("JSON Server is running");
});
```

4. Run the Server : `json-server --watch db.json`
5. Run the Server : `json-server --watch db.json --port 5000`
