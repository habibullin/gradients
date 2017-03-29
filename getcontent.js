$.getJSON( "gradients.json", function( data ) {
	var items = [];
	$.each( data, function( name, color ) {
		items.push( 
			"<div class='gradient' style='background: linear-gradient(to top, " + color[0] + ", " + color[1] + ");'>"
				+ name +
			"</div>"
		 );
	});
 
	$( "<div/>", {
		"class": "gradients",
		html: items.join( "" )
	}).appendTo( ".content" );
});