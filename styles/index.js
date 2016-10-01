window.last=function(){
		if($('#cv').is(':visible')) {
			return '#cv'
		} else if ($('#about').is(':visible')) {
			return '#about'
		} else if ($('#contact').is(':visible')) {
			return '#contact'
		}
	}

var hide_lists=function(cb){
	$(last()).removeClass('disabled');
	$(last()).fadeOut(300);
};

var show_projects=function(){
	$(last()).removeClass('disabled');
	$(last()).fadeOut(300, function(){$('#projects').fadeIn(300)});
	$('#projects-btn').addClass('disabled')
};

var show_posts=function(){
	$(last()).removeClass('disabled');
	$(last()).fadeOut(300, function(){$('#posts').fadeIn(300)});
	$('#posts-btn').addClass('disabled')
};

var show_cv=function(){
	$(last()).removeClass('disabled');
	$(last()).fadeOut(300, function(){$('#cv').fadeIn(300)});
	$('#cv-btn').addClass('disabled')
};

var show_about=function(){
	$(last()).removeClass('disabled');
	$(last()).fadeOut(300, function(){$('#about').fadeIn(300)});
	$('#about-btn').addClass('disabled')
};

var show_contact=function(){
	$(last()).removeClass('disabled');
	$(last()).fadeOut(300, function(){$('#contact').fadeIn(300)});
	$('#contact-btn').addClass('disabled')
};