const { Client } = require('pg');

const logQuery = (statememt, parameters) => {
  let timeStamp = new Date();
  let formattedTimeStamp = timeStamp.toString().substring(4,24);
  console.log(formattedTimeStamp, statememt, parameters);
}

module.exports = {

  async dbQuery(statement, ...parameters) {
    let client = new Client( { database: 'todo-lists', password: '20LQ21' });
    
    await client.connect();
    logQuery(statement, parameters);
    let result = await client.query(statement, parameters);
    await client.end();
    return result;
  }
};
