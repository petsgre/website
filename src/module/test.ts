import ok = require('./module')
console.log(ok)
import axios = require('../util/axios.js')
const cities = axios.get('http://192.168.199.195:9999/cities')
cities.then((res: any) => {
  console.log(res.data)
})
function getP() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('foo');
    }, 1000);
  });
}
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 1000);
});
class User {

}
async function getCity() {
  const res = await getP()
}
getCity()
