const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { hello, getUsers } = require('../resolvers/queryResolvers');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    hello: {
      type: GraphQLString,
      description: 'Simple hello world query',
      resolve: hello
    },
    getUsers: {
      type: new GraphQLList(UserType), // We'll create UserType next
      description: 'Get all users',
      resolve: getUsers
    }
  })
});

// Import UserType (we'll create it next)
const UserType = require('./userType');

module.exports = QueryType;