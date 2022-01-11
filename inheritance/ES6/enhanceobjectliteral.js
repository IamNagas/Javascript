/* function getMobile(manufacturer, model, year) {
    return {
       manufacturer,
       model,
       year
    }
 }
 getMobile("Samsung", "Galaxy", "2020");
 */

 var asyncCall =  new Promise((resolve, reject) => {
    // do something,
    resolve();
 }).then(()=> {  
    console.log('anyncCall');
 })
 