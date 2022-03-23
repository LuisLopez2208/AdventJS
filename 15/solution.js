function checkSledJump(heights) {
    var state = 'up';
    var changes = 0;
    for (var i = 0; i < heights.length - 1; i++) {
        var curr = heights[i];
        var next = heights[i + 1];
        var state = '';
        if (next > curr) {
            state = 'up';
        } else if (curr > next) {
            state = 'down';
        } else {
            return false;
        }
        if (state !== state) {
            changes++;
        }
        state = state;
    }
    if (changes === 1) {
        return true;
    }
    return false;
}