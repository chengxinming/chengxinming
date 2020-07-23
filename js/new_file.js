

//网站导航 二级
var b = null

$("#wang").mouseover(function () {
	var a = $(this).index();
	$("#dao").css("display", "block")
	$(this).css("border", "solid 1px rgb(230,230,230)")
	$("#dao").css("border", "solid 1px rgb(230,230,230)")
})
function te() {
	$("#dao").css("display", "none")
	$("#wang").css("border", "")
}
$("#wang").mouseleave(function () {
	b = setTimeout(te, 1000)
})
$("#dao").mouseover(function () {
	clearTimeout(b)
})
$("#dao").mouseleave(function () {
	te()
})

//二维码

$(".header-two").mouseover(function () {
	var a = $(this).index();
	$(".erwei").css("display", "block")

})
function bo() {
	$(".erwei").css("display", "none")
}
$(".header-two").mouseleave(function () {
	b = setTimeout(bo, 1000)
})
$(".erwei").mouseover(function () {
	clearTimeout(b)
})
$(".erwei").mouseleave(function () {
	te()
})

//导航条 用户注册样式

$(".guwen1 a:eq(0)").mouseover(function () {
	$(".guwen1 a:eq(0)").css("color", "gold")
}).mouseout(function () {
	$(".guwen1 a:eq(0)").css("color", "")
})

$(".guwen1 a:eq(1)").mouseover(function () {
	$(".guwen1 a:eq(1)").css("color", "gold")
}).mouseout(function () {
	$(".guwen1 a:eq(1)").css("color", "")
})

$(".dingdan a:eq(1)").mouseover(function () {
	$(".dingdan a:eq(1)").css("color", "gold")
}).mouseout(function () {
	$(".dingdan a:eq(1)").css("color", "")
})

$(".dingdan a:eq(2)").mouseover(function () {
	$(".dingdan a:eq(2)").css("color", "gold")
}).mouseout(function () {
	$(".dingdan a:eq(2)").css("color", "")
})




$(".guwen1").mouseover(function () {
	var a = $(this).index();
	$(".dingdan").css("display", "block")

})
function bi() {
	$(".dingdan").css("display", "none")
}
$(".guwen1").mouseleave(function () {
	b = setTimeout(bi, 1000)
})
$(".dingdan").mouseover(function () {
	clearTimeout(b)
})
$(".dingdan").mouseleave(function () {
	bi()
})

//绿色选项卡

$(".guwen li").mouseover(function () {
	var a = $(this).index();
	$(this).css("color", "white").siblings().css("color","")
	$(".fudong li").eq(a).css("display", "block").siblings().css("display", "none")
})
function lvse() {
	$(".fudong li").css("display", "none")

	$(".fudong li:eq(5)").css("display", "block")
	$(".guwen li:eq(5)").css("background", "#02AB43")
}

$(".guwen").mouseleave(function () {
	b = setTimeout(lvse, 500)
})
$(".fudong li").mouseover(function () {
	clearTimeout(b)
})
$(".fudong li").mouseleave(function () {
	lvse()
})

// 出发城市
var count = 0;
$(".chufa1").click(function () {
	if (count == 0) {
		$(".remenchufa").show();
		count = 1;
	} else {
		$(".remenchufa").hide();
		count = 0;
	}
})

// 搜索框
$(".sousuokuan input").click(function () {
	$(".sousuokuan img").hide();
	$(this).attr("placeholder", "")
})
// 二级菜单
$(".bamayou").mouseover(function () {
	 $(this).css("backgroundColor", "black").siblings().css("backgroundColor","");
	 
})
$(".bamayou").mouseout(function () {
	$(this).css("backgroundColor", "")
})



