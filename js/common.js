$(document).ready(function() {
	$("#sandwich, .menu_item").click(function() {

	 $("#sandwich").toggleClass("active");
	 $("#navigat").css({"left":0}).toggle(1000);
});
		
		$("button.btn-default").hover(function(){
				$(this).animate({backgroundColor: "blue"}, 1000);}, function(){
				$(this).animate({backgroundColor: "transparent"});
		});

		$("div.suli").html($("li.inft").next().html());
		$("li.inft").click(function(){
			$(this).toggleClass("active").siblings().removeClass("active");
			$("div.suli").html($(this).next().html());

		});	
		
		

		   });