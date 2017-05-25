module.exports = function(f) {
  var ctx = this;
  return function() {
    var args = Array.prototype.slice.call(arguments);
    return new Promise(function(res, rej) {
      args.push(function(err, result) {
        if (err) {
          rej(err);
        } else {
          res(result);
        }
      });
      f.apply(ctx, args);
    });
  }
}