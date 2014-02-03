var sublinks = {
    brand : ['pause4Pets','easyFoam','garlandThai'],
    print : ['spanishLearningCentre','pause4Pets','openHouse','artExhibition','easyFoam',
             'kateWeir21','greenCrossAustralia','bergsGourmetBurgers','boxNBowls','barn',
             'anewchapter'],
    pack : ['dmdImports','ecoBud'],
    nfp : ['openHouse','artExhibition','greenCrossAustralia','endeavourFoundation',
           'anewchapter'],
    textiles : ['swagga','dmdImports'],
    industry : ['endeavourFoundation']
}

Template.main.helpers({
	isActive : function(key) {
            var currentPage = Template.main.getCurrentPage();
	    if( key === currentPage ) return 'active';
            else if( currentPage.indexOf(key) == 0 ) return 'active';
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
		if( currentPage == 'contact' ) return false;
		if( currentPage == 'about' ) return false;
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

Template.main.rendered = function() {
	$('.folio-content').magnificPopup({
        delegate: 'a.popup',
		type: 'image',
	    gallery:{enabled:true}
    });

}
