(() => {

    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.sum = function() {
        let totalSum = 0;
        for (const n of this) {
            totalSum+= n;    
        }

        return totalSum;
    }

    Array.prototype.average = function() {
        return this.sum() /this.length;
    }

})();