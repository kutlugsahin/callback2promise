# callback2promise
Converts functions with node style callbacks to promise (es6)

# installation
```javascript
npm install callback2promise --save
```
# usage
```javascript

var c2p = require('callback2promise');

// ordinary function with any number of parameters and a callback at the end
var nodeStyleFunc = function(param1, param2, callback){
  setTimeout(
    function(){ 
      callback(null, 'done') 
    }, 200);
}

// convert the function to a promise
var promise = c2p(nodeStyleFunc)(param1, param2);

promise
  .then(result => console.log(result))
  .catch(err => console.log(err));

```
