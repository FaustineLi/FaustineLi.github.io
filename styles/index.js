var hide_lists=function(cb){
	$('#posts').fadeOut(300);
	$('#projects').fadeOut(300);
	$('#posts-btn').removeClass('disabled');
	$('#projects-btn').removeClass('disabled')
};

var show_projects=function(){
	$('#posts-btn').removeClass('disabled');
	$('#posts').fadeOut(300,function(){$('#projects').fadeIn(300)});
	$('#projects-btn').addClass('disabled')
};

var show_posts=function(){
	$('#projects-btn').removeClass('disabled');
	$('#projects').fadeOut(function(){$('#posts').fadeIn(300)});
	$('#posts-btn').addClass('disabled')
};

var show_cv=function(){
	$('#projects-btn').removeClass('disabled');
	$('#about-btn').removeClass('disabled');
	$('#contact-btn').removeClass('disabled');
	$('#projects').fadeOut(300);
	$('#cv').fadeIn(300);
	$('#cv-btn').addClass('disabled')
};

var show_about=function(){
	$('#projects-btn').removeClass('disabled');
	$('#cv-btn').removeClass('disabled');
	$('#contact-btn').removeClass('disabled');
	$('#projects').fadeOut(300);
	$('#about').fadeIn(300);
	$('#about-btn').addClass('disabled')
};

var show_contact=function(){
	$('#projects-btn').removeClass('disabled');
	$('#about-btn').removeClass('disabled');
	$('#cv-btn').removeClass('disabled');
	$('#projects').fadeOut(300);
	$('#contact').fadeIn(300);
	$('#contact-btn').addClass('disabled')
};