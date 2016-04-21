module.exports = function (f) {
    var ctx = this;
    return function () {
        var fArgs = Array.prototype.slice.call(arguments);

        return new Promise((res, rej) => {
            fArgs.push(function (err, result) {
                if (err) rej(err);
                else res(result);
            });

            f.apply(ctx, fArgs);
        });
    }
};