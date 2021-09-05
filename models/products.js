const connection = require('./connection');

class UserModel {
  constructor(nameCollection) {
    this.nameCollection = nameCollection;
  }
  async getAll() {
    const a = await connection()
      .then( (db) => {
        const b =  db.collection(this.nameCollection).find();
        return b;
      });
    console.log('getALL', a);
    return a;
  }

  async findByName(name) {
    const a = await connection()
      .then( (db) => {
        const b =  db.collection(this.nameCollection).find({ name });
        return b;
      });
    console.log('findByName', a);
    return a;
  }

  findByID() {

  }

  async insertOne(data) {
    const a = await connection()
      .then( (db) => {
        const b =  db.collection(this.nameCollection).inserOne(data);
        return b;
      });
    console.log('insertOne', a);
    return a;
  }
}

module.exports = UserModel;
