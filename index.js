module.exports = function (f) {
    var ctx = this;
    return function () {
        var fArgs = Array.prototype.slice.call(arguments);
        var paramLength = f.length;
        var args = [];

        for (var i = 0; i < paramLength -1; i++) {
            if(i < fArgs.length){
                args.push(fArgs[i])
            }else{
                args.push(undefined);
            }
        }

        return new Promise((res, rej) => {
            args.push(function (err, result) {
                if (err) rej(err);
                else res(result);
            });

            f.apply(ctx, args);
        });
    }
};