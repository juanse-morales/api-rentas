let users = [
  { id: '1', name: 'John Doe', email: 'john@example.com', createdAt: new Date().toISOString() },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date().toISOString() }
];

const queryResolvers = {
  hello: () => 'Hello from GraphQL API!',
  
  getUsers: () => {
    return users;
  },
  
  getUser: (parent, args) => {
    return users.find(user => user.id === args.id);
  }
};

module.exports = queryResolvers;