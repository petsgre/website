import ok = require('./module')
type CardinalDirection = 'North' | 'East' | 'South' | 'West';

function move(distance: number, direction: CardinalDirection) {
  // ...
}

move(1, 'North'); // ok
interface obj {
  name: string
}
type My = obj
const name: My = {
  name: 'zx'
}

type Adder = (a: number, b: number) => number;
let foo: Adder = (a, b) => a + b;
foo(1,2)
console.log(name)
console.log("**********")
import axios = require('../util/axios.js')
import axios1 = require('../util/axios.js')
console.log(axios1)
namespace Utility {
  export function log(msg: string) {
    console.log(msg);
  }
  export function error(msg: string) {
    console.log(msg);
  }
}
window.helloWorld = () => console.log('hello world');
window.helloWorld();
// usage
Utility.log('Call me');
Utility.error('maybe');
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
