//const { createHandler } = require("graphql-http/lib/use/express");
const expressGraphQL = require('express-graphql');
const express = require("express");

const app = express();

//Registering the GraphQL express server
//app.use("/graphql", createHandler({ graphql: true, }));

app.use("/graphql", expressGraphQL.graphqlHTTP({ graphiql: true, }));
app.listen({ port: 4000 });
console.log("Listening to port 4000");