//Event listeners for the arrow keys
function userInput(obj) {
    canvas.addEventListener('keydown', function (e) {
        if (e.key === 37) {
            obj.left = true;
        }
        if (e.key === 38) {
            obj.up = true;
        }
        if (e.key === 39) {
            obj.right = true;
        }
        if (e.key === 40) {
            obj.down = true;
        }
        if (e.key === 32) {
            obj.action = true;
        }
    });

    canvas.addEventListener('keyup', function (e) {
        if (e.key === 37) {
            obj.left = false;
        }
        if (e.key === 38) {
            obj.up = false;
        }
        if (e.key === 39) {
            obj.right = false;
        }
        if (e.key === 40) {
            obj.down = false;
        }
        if (e.key === 32) {
            obj.action = false;
        }
    });
}