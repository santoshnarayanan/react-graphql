const graphql = require('graphql');
const axios = require('axios');
const {
    GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema
} = graphql;

//define the company type above UserType
const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString }
    }
});

//Define the user type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: {
            type: CompanyType
        }
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
                //fetch actual data from the json-server hosted on localhost:3000
                return axios.get(`http://localhost:3000/users/${args.id}`).then(res => res.data);
            }
        }
    }
});

//make it available to other
module.exports = new GraphQLSchema({
    query: RootQuery
});