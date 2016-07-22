$(document).ready(function() {
	



	$("#sandwich, .menu_item").click(function() {

	 $("#sandwich").toggleClass("active");
	 $("#navigat").css({"left":0}).toggle(1000);
});
		
		
		
				
		

		
		$("div.suli").html($("li.inft").next().html());
		$("li.inft").click(function(){
			$(this).toggleClass("active").siblings().removeClass("active");
			$("div.suli").html($(this).next().html());

$("a.btnwrap").hover(function(){
			$(this).find("span").animate({width:"100%"},500).text($(this).text());}, function(){
			$(this).find("span").animate({width:"0"},500).text("");
		});

		});	
$("a.btnwrap").hover(function(){
			$(this).find("span").animate({width:"100%"},500).text($(this).text());}, function(){
			$(this).find("span").animate({width:"0"},500).text("");
		});		
		
$("div.pick, div.pick2 ").mouseover(function(){
$(this).find(".supick").css({"display": "block"});
});
$(".supick").mouseout(function(){
$(this).css({"display":"none"});
});
$(".supick a").hover(function(){
$(this).find("span").animate({width: "60%"}, 300).text($(this).text()); }, function(){
	$(this).find("span").animate({width: "0"}, 300).text("");

});

	if($(window).width()>990){
		$("div.menu li").hover(function(){
			$("section#subnav").show();}, function(){
				$("section#subnav").hide();
		});
	}else if($(window).width()<990){
			$("div.menu li").click(function(){
				$("section#subnav").show();
				$("section#subnav p").css({"background-color":"#ccc"}).text("Back")

			});
				$("section#subnav p").click(function(){
						$("section#subnav").hide("slow");
				});

	};

	
		   });