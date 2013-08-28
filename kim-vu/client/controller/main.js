var sublinks = {
    brand : ['pause4Pets','easyFoam','garlandThai']
}

Template.main.helpers({
	isActive : function(key) {
		var currentPage = Template.main.getCurrentPage();
	    if( key === currentPage ) return 'active';
	    else return '';
	},
	isSubActive : function(key) {
		var currentPage = Template.main.getCurrentPage();
		var subs = sublinks[currentPage];
		if( subs && subs.indexOf(key) >= 0 ) return 'active';
		else if( key === currentPage ) return 'active';
	    else return '';
	}
});

Template.main.getCurrentPage = function() {
	var currentUrl = document.URL;
	if( currentUrl ) {
		var splitUrl = currentUrl.split('/');
		if( splitUrl && splitUrl.length >= 4 )
		{
			return splitUrl[3];
		}
	}
}

Template.main.isFolio = function() {
	var currentPage = Template.main.getCurrentPage();
	if( currentPage ) {
		return true;
	}
	return false;
}

Template.main.backgroundClass = function() {
	if( Template.main.isFolio() ) return 'folio';
	else return 'home';
}

Template.main.logoImageSrc = function() {
	if( Template.main.isFolio() ) return 'images/logo-teal.png';
	else return 'images/logo.png';
}