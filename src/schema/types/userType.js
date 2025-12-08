const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User type definition',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Unique identifier for the user'
    },
    name: {
      type: GraphQLString,
      description: 'Full name of the user'
    },
    email: {
      type: GraphQLString,
      description: 'Email address of the user'
    },
    createdAt: {
      type: GraphQLString,
      description: 'Date when user was created'
    },
    updatedAt: {
      type: GraphQLString,
      description: 'Date when user was last updated'
    }
  })
});

module.exports = UserType;