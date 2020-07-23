$(function () {
    var current = 0;
    var len = $(".navac li").length;
    var timer = null;
    function show() {
        if (current >= len) {
            current = 0;
        }
        $(".navac li:eq(" + current + ")").css("display", "block").siblings().css("display", "none")
        $(".oule li:eq(" + current + ")").css("background", "red").siblings().css("background", "#EEEEEE");
    }
    show()
    function slide() {
        current++;
        show()
    }
    timer = setInterval(slide, 3000)
    $(".lunbotupian").mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        timer = setInterval(slide, 3000)
    })

    $(".oule li").mouseover(function () {
        clearInterval(timer);
        current = $(this).index();
        show()
    })
})

