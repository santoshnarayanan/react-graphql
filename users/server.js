const { createHandler } = require("graphql-http/lib/use/express");
const express = require("express");
const app = express();
app.use("/graphql", createHandler({ graphql: true, }));
app.listen({ port: 4000 });
console.log("Listening to port 4000");