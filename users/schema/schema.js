const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema
} = graphql;

//Create data with hard coded values
const users = [
    { id: '23', firstName: 'Bill', age: 30 },
    { id: '47', firstName: 'Samantha', age: 27 },
]

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
                return _.find(users, { id: args.id });
            }
        }
    }
});

//make it available to other
module.exports = new GraphQLSchema({
    query: RootQuery
});