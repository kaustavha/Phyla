$("#intro").delay(2000).slideUp(600);
$("#intro").scroll(function(){
	$("#intro").fadeOut('fast');
});
$("div.card").hover(
	function () {
		$(this).toggleClass("flipped");
	});
$("div.biosHolder").children().click(
	function(){
		var id = $(this).attr('id');
		$("div.bio").fadeOut();
		$("div.bio").addClass("hide");
		$("#bio"+id).removeClass("hide");
		$("#bio"+id).fadeIn();
	});
$("div.card").click(
	function() {
		var id = $(this).attr('id');
		$('#artists').fadeOut();
		$('#artistBios').removeClass("hide");
		$('#artistBios').fadeIn();
		$("#bio"+id).removeClass("hide");
	});
$("#navArtists").click(
	function(){
		$('artistBios').fadeOut();
		$('#artistBios').addClass("hide");
		$('#artists').fadeIn();
		$("div.bio").addClass("hide");
	});