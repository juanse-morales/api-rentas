const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const queryType = require('./types/query');
const mutationType = require('./types/mutation');

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

module.exports = schema;