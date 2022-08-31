/**
  Sample JavaScript code for Cronit online cronjobs scripting system 
  To run on https://cronit.app 
  
  Example: How to call a database
*/
module.exports = async () => {
    let connexion = database({
      client: 'mysql',
      connection: {
        host : '127.0.0.1',
        port : 3306,
        user : 'your_database_user',
        password : 'your_database_password',
        database : 'myapp_test'
      }
    });
    
    await connexion('table')
      .insert({a: 'b'})
      .returning('*')
      .toString();
}
