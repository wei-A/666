;$.fn.extend({
	swiper:function(option){
		o = option || {};
		var index = 0;
function dong(){
	$(".button").find("span").eq(index).addClass("active").siblings().removeClass("active");
	if(o.animate){
		$(".inner").stop().animate({
		left:-index * $(".wrap").width()
	    })
	}
	else{
		$(".inner").css({
		left:-index * $(".wrap").width()
	    })		
	}
}
function prep(){
	index--;
	if(index < 0 ){
		index = $(".inner").find("img").size() - 1;
	}
	dong();
}
function nextp(){
	index++;
	if(index > $(".inner").find("img").size() - 1){
		index = 0;
	}
	dong();
}
$("span").bind("click",function(e){
	index = $(this).index();
	dong();
})
touch.on(document, 'swiperight', function(ev){
	prep();
});

touch.on(document, 'swipeleft', function(ev){
	nextp();
});
if(o.autoplay){
var timer = setInterval(function(){
	nextp();
},8000)

}
	}
})