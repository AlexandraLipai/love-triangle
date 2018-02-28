/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

    module.exports = function getLoveTrianglesCount(preferences) {
// your implementation
        var  arr = 0;
        var length = preferences.length;
        for (var i = 0; i < length; i++){

            var x = preferences[i];

            if (length + 1 > x){

                var y = preferences[x-1];

                if (length + 1 > y){

                    var z = preferences[y-1];
                    
                    if (z === i+1 && y != i+1) arr++;
                }
            }
        }
        return arr/3;
    };

