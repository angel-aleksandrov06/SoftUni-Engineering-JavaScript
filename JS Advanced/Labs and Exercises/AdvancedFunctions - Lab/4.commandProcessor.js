var proc = (function () {
    var text = '';

    function append(str) {
        text += str;
    }

    function removeStart(n) {
        text = text.substring(n);
    }

    function removeEnd(n) {
        if (text.length >= n) {
            text = text.substring(0, text.length - n);
        }
    }

    function print() {
        console.log(text);
    }

    return {
        append,
        removeEnd,
        removeStart,
        print
    };
})();

proc.append('123');
proc.append('45');
proc.removeStart(2);
proc.removeEnd(1);
proc.print();