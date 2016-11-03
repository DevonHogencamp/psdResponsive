window.onload = function () {
    var burger = document.getElementById('burgerNav');
    var menu = document.getElementById('menu');
    var height = 0;
    var animation;

    burger.onclick = function () {
        function addHeight() {
            if (height == 222) {
            clearInterval(animation);
            }
            else {
                height += 2;
                menu.style.height = height + 'px';
            }
        }

        function subHeight() {
            if (height === 0) {
            clearInterval(animation);
            }
            else {
                height -= 2;
                menu.style.height = height + 'px';
            }
        }

        if (height === 0) {
            animation = setInterval(addHeight, 1);
        }
        else {
            animation = setInterval(subHeight, 1);
        }
    };
};
