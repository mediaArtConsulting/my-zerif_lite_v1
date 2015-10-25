jQuery(document).ready(function () {
	
	var bigSubTitle_text = jQuery('<h3>', {text: 'A PLATTFORM FOR A BETTER LIFE', class: 'bigSubTitle'}),
		bigTitle = jQuery('.header-content-wrap').children(),
		bigTitle_buttons = bigTitle.children('.buttons');

		jQuery(bigTitle).children('.buttons').remove();
		jQuery(bigTitle).append(bigSubTitle_text).append(bigTitle_buttons);
		console.info(bigTitle);
});