declare global {
    interface String {
        formatUnicorn(...optionalParams: (Number | String)[]): string;
    }
}
// static function
function formatUnicorn(Data: string, ...optionalParams: (string | number | String | Number | Date)[]) {
    var str = Data.toString();
    if (arguments.length) {
        var t = typeof arguments[1];  /// !!! NOTE THE DIFFERENCE!
        var key;
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(arguments, 1)
            : arguments[1];

        for (key in args) {
            let index = parseInt(key)
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[index]);
        }
    }
    return str;
}


// instance function
String.prototype.formatUnicorn = function (...optionalParams: (Number | String)[]) {
    var str = this.toString();
    if (arguments.length) {
        var t = typeof arguments[0]; /// !!! NOTE THE DIFFERENCE!
        var key;
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(arguments)
            : arguments[0];

        for (key in args) {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
    }
    return str;
}

const StrUtils = {
    formatUnicorn // the static standalone function
}

export default StrUtils;