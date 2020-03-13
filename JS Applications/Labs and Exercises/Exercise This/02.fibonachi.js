function getFibonator() {

    let prevFib = 0;
    let currentFib = 1;


    return function() {
        let result = currentFib;

        [currentFib, prevFib] = [prevFib+currentFib, currentFib];

        return result;
    }
}