/**
  Sample JavaScript code for Cronit online cronjobs scripting system 
  To run on https://cronit.app 
  
  Example: How to use our internal cache system 
*/
module.exports = async () => {
    let value = await cache.get('mykey'); 
    if(!value) await cache.set('mykey', JSON.stringify({today: new Date()}), 1000); 
}
