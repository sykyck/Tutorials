const express = require("express");
var cors = require('cors');
const { modules: routes } = require("./routes");
const app = express();

app.use(cors());

app.listen(3000,() => {
    console.log("Server Listening");
});

const entries = Object.entries(routes);

console.log(Object.entries(routes));
for (const [key,value] of entries) {
    app.get("/api/v2/" + key, value);
}