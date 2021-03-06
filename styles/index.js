var hide_lists=function(cb){
	var last=function(){
		if($('#cv').is(':visible')) {
			return {div: "#cv", btn: "#cv-btn"}
		} else if ($('#about').is(':visible')) {
			return {div: "#about", btn: "#about-btn"}
		} else if ($('#contact').is(':visible')) {
			return {div: "#contact", btn: "#contact-btn"}
		} else if ($('#projects').is(':visible')) {
			return {div: "#projects", btn: "#projects-btn"}
		} else {
			return {div: "#posts", btn: "#posts-btn"}
		}
	}
	var data = last()
	$(data.btn).removeClass('disabled');
	$(data.div).fadeOut(300);
};

var show_projects=function(){
	var last=function(){
		if($('#cv').is(':visible')) {
			return {div: "#cv", btn: "#cv-btn"}
		} else if ($('#about').is(':visible')) {
			return {div: "#about", btn: "#about-btn"}
		} else if ($('#contact').is(':visible')) {
			return {div: "#contact", btn: "#contact-btn"}
		} else {
			return {div: "#posts", btn: "#posts-btn"}
		}
	}
	var data = last()
	$(last().btn).removeClass('disabled');
	$(last().div).fadeOut(300, function(){$('#projects').fadeIn(300)});
	$('#projects-btn').addClass('disabled')
};

var show_posts=function(){
	var last=function(){
		if($('#cv').is(':visible')) {
			return {div: "#cv", btn: "#cv-btn"}
		} else if ($('#about').is(':visible')) {
			return {div: "#about", btn: "#about-btn"}
		} else if ($('#contact').is(':visible')) {
			return {div: "#contact", btn: "#contact-btn"}
		} else if ($('#projects').is(':visible')) {
			return {div: "#projects", btn: "#projects-btn"}
		} else {
			return {div: "#posts", btn: "#posts-btn"}
		}
	}
	var data = last()
	$(last().btn).removeClass('disabled');
	$(last().div).fadeOut(300, function(){$('#posts').fadeIn(300)});
	$('#posts-btn').addClass('disabled')
};

var show_cv=function(){
	var last=function(){
		if($('#cv').is(':visible')) {
			return {div: "#cv", btn: "#cv-btn"}
		} else if ($('#about').is(':visible')) {
			return {div: "#about", btn: "#about-btn"}
		} else if ($('#contact').is(':visible')) {
			return {div: "#contact", btn: "#contact-btn"}
		} else if ($('#projects').is(':visible')) {
			return {div: "#projects", btn: "#projects-btn"}
		} else {
			return {div: "#posts", btn: "#posts-btn"}
		}
	}
	var data = last()
	$(last().btn).removeClass('disabled');
	$(last().div).fadeOut(300, function(){$('#cv').fadeIn(300)});
	$('#cv-btn').addClass('disabled')
        try_until_sucess(resizeIframe, 10);
};

var show_about=function(){
	var last=function(){
		if($('#cv').is(':visible')) {
			return {div: "#cv", btn: "#cv-btn"}
		} else if ($('#about').is(':visible')) {
			return {div: "#about", btn: "#about-btn"}
		} else if ($('#contact').is(':visible')) {
			return {div: "#contact", btn: "#contact-btn"}
		} else if ($('#projects').is(':visible')) {
			return {div: "#projects", btn: "#projects-btn"}
		} else {
			return {div: "#posts", btn: "#posts-btn"}
		}
	}
	var data = last()
	$(last().btn).removeClass('disabled');
	$(last().div).fadeOut(300, function(){$('#about').fadeIn(300)});
	$('#about-btn').addClass('disabled')
};

var show_contact=function(){
	var last=function(){
		if($('#cv').is(':visible')) {
			return {div: "#cv", btn: "#cv-btn"}
		} else if ($('#about').is(':visible')) {
			return {div: "#about", btn: "#about-btn"}
		} else if ($('#contact').is(':visible')) {
			return {div: "#contact", btn: "#contact-btn"}
		} else if ($('#projects').is(':visible')) {
			return {div: "#projects", btn: "#projects-btn"}
		} else {
			return {div: "#posts", btn: "#posts-btn"}
		}
	}
	var data = last()
	$(data.btn).removeClass('disabled');
	$(data.div).fadeOut(300, function(){$('#contact').fadeIn(300)});
	$('#contact-btn').addClass('disabled')
};

function resizeIframe(e) {
        var iframe = document.getElementById("cv_iframe");
	var w = iframe.offsetWidth;
	if (w == 0) {
	    return false;
	}
        iframe.style.height = 11 / 8.5 * (w - 24) + 24 + "px";
	return true;
};

function try_until_sucess(func, delay) {
        if (!func()) {
	    setTimeout(function(){try_until_sucess(func, delay);}, delay);
	}
}

window.addEventListener("resize", resizeIframe);

