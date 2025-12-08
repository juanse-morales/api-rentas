const { GraphQLObjectType, GraphQLString } = require('graphql');

// Import your mutation resolvers here
const { createUser } = require('../resolvers/mutationResolvers');
const UserType = require('./userType');

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    createUser: {
      type: UserType,
      description: 'Create a new user',
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString }
      },
      resolve: createUser
    }
  })
});

module.exports = MutationType;