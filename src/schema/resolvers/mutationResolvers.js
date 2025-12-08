let users = [];
let nextId = 1;

const mutationResolvers = {
  createUser: (parent, args) => {
    const newUser = {
      id: String(nextId++),
      name: args.name,
      email: args.email,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    users.push(newUser);
    return newUser;
  },
  
  updateUser: (parent, args) => {
    const userIndex = users.findIndex(user => user.id === args.id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    
    const updatedUser = {
      ...users[userIndex],
      ...args,
      updatedAt: new Date().toISOString()
    };
    users[userIndex] = updatedUser;
    return updatedUser;
  },
  
  deleteUser: (parent, args) => {
    const userIndex = users.findIndex(user => user.id === args.id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    
    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);
    return deletedUser;
  }
};

module.exports = mutationResolvers;