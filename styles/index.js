var hide_lists=function(cb){
	var last=function(){
		if($('#cv').is(':visible')) {
			return '#cv'
		} else if ($('#about').is(':visible')) {
			return '#about'
		} else if ($('#contact').is(':visible')) {
			return '#contact'
		}
	}
	$(last()).removeClass('disabled');
	$(last()).fadeOut(300);
};

var show_projects=function(){
	var last=function(){
		if($('#cv').is(':visible')) {
			return '#cv'
		} else if ($('#about').is(':visible')) {
			return '#about'
		} else if ($('#contact').is(':visible')) {
			return '#contact'
		}
	}
	$(last()).removeClass('disabled');
	$(last()).fadeOut(300, function(){$('#projects').fadeIn(300)});
	$('#projects-btn').addClass('disabled')
};

var show_posts=function(){
	var last=function(){
		if($('#cv').is(':visible')) {
			return '#cv'
		} else if ($('#about').is(':visible')) {
			return '#about'
		} else if ($('#contact').is(':visible')) {
			return '#contact'
		}
	}
	$(last()).removeClass('disabled');
	$(last()).fadeOut(300, function(){$('#posts').fadeIn(300)});
	$('#posts-btn').addClass('disabled')
};

var show_cv=function(){
	var last=function(){
		if($('#cv').is(':visible')) {
			return '#cv'
		} else if ($('#about').is(':visible')) {
			return '#about'
		} else if ($('#contact').is(':visible')) {
			return '#contact'
		}
	}
	$(last()).removeClass('disabled');
	$(last()).fadeOut(300, function(){$('#cv').fadeIn(300)});
	$('#cv-btn').addClass('disabled')
};

var show_about=function(){
	var last=function(){
		if($('#cv').is(':visible')) {
			return '#cv'
		} else if ($('#about').is(':visible')) {
			return '#about'
		} else if ($('#contact').is(':visible')) {
			return '#contact'
		}
	}
	$(last()).removeClass('disabled');
	$(last()).fadeOut(300, function(){$('#about').fadeIn(300)});
	$('#about-btn').addClass('disabled')
};

var show_contact=function(){
	var last=function(){
		if($('#cv').is(':visible')) {
			return '#cv'
		} else if ($('#about').is(':visible')) {
			return '#about'
		} else if ($('#contact').is(':visible')) {
			return '#contact'
		}
	}
	$(last()).removeClass('disabled');
	$(last()).fadeOut(300, function(){$('#contact').fadeIn(300)});
	$('#contact-btn').addClass('disabled')
};