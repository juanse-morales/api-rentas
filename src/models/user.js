
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
  
  update(data) {
    this.name = data.name || this.name;
    this.email = data.email || this.email;
    this.updatedAt = new Date().toISOString();
    return this;
  }
}

module.exports = User;