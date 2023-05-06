const graphql = require('graphql');
const {
    GraphQLObjectType, GraphQLString, GraphQLInt
} = graphql;

//Define the user type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});

//Define the root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                //fetch actual data from the database
            }
        }
    }
});