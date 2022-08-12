// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    return matrix
        .map((array, index) => {
            if (index%2 !== 0) {
                array.sort((a, b) => b - a);
            }

            return array;
        })
        .reduce(function (previousValue, array) {
            previousValue.push(...array);

            return previousValue;
        }, []);
}
