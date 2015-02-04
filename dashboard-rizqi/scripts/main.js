$(document).ready(function(){
	$(".editlink").click(function(){
		$(this).parent().find(".editable, .donelink").toggle();
		$(this).parents(".profile__box").find("label").toggleClass("canEdit");
		$(this).parents(".profile__box").find(".editable, .donelink").show();
		$(this).parents(".profile__box").find(".hideable, .editlink").hide();
		$(this).hide();

	});
	$(".donelink").click(function(){
		$(this).parent().find(".editable, .donelink").toggle();
		$(this).parents(".profile__box").find("label").toggleClass("canEdit");
		$(this).parents(".profile__box").find(".editable, .donelink").hide();
		$(this).parents(".profile__box").find(".hideable, .editlink").show();
		$(this).parent().find(".editlink").show();
		$(this).hide();
	});
});

