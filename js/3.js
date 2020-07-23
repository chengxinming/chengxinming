$(function () {
	var count = 0;
	$(".sipai").mouseover(function () {
		$(".jian-left").show();
		$(".jian-right").show();
	}).mouseout(function () {
		$(".jian-left").hide();
		$(".jian-right").hide();
	})
	$(".jian-right").click(function () {
		// console.log(1);
        count++;
        show();
    })
    $(".jian-left").click(function () {
		// console.log(1);
        count--;
        console.log(count);
        
        if (count <=-1) {
			count = 4;
		}
		$(".bianli").eq(count).show().siblings().hide();
   
	})
    var len = $(".bianli").length;
    console.log(len);
	var timer = null;
	function show() {
		if (count >= len) {
			count = 0;
		}
		$(".bianli").eq(count).show().siblings().hide();
    }
	show();
	function solid() {
		count ++;
		show();
	}
	timer = setInterval(solid, 3000);
	$(".sipai").mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        timer = setInterval(solid, 3000)
    })

})