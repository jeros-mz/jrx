/*	
 *	jrx.init
 *	
 *	Copyright (c) 2014 MZ jeros
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
(function( $, window, document){
	
	//======================== Valiable ==========================
	var utils = $ || {};
	
	//============================================================
	
	//======================== mix $.utils =======================
	
	utils.jrx = jrx;
	
	$.each(jrx, function(v, i){
		
		if( utils[v] === undefined ){
			utils[v] = jrx[v];
		} else {
			jrx.log('ooora! - ' + v);
		}
	});
	//============================================================
	
	//======================== Language ==========================
	
	//============================================================
	
	$(function(){
		
		//========================= variable =========================
		var dateFormat = 'yy-mm-dd',
			timeFormat = 'HH:mm',
			content_type = {
				defaults : 'application/x-www-form-urlencoded; charset=UTF-8',
				json : 'application/json'
			};
		//============================================================
				
		//===================== set jquery ajax. ===================== contentType : content_type.defaults, 
		$.ajaxSetup({ cache: false,
        	converters: {
				// Convert anything to text
				"* text": window.String,
				// Text to html (true = no transformation)
				"text html": true,
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
				// Parse text as xml
				"text xml": jQuery.parseXML
			}
        });
		//============================================================
		
		
		//======================== datepicker ========================
		if($.isFunction($.fn.datepicker)){
			$.datepicker.setDefaults({
				// showOn: "button",
                // buttonImage: $.config('staticPath') + "images/ico_calendar.gif",
                // buttonImageOnly: true,
                dateFormat: dateFormat
            });
            
			// $('input[date]', $contents).datepicker();
		}
		//============================================================
		
	});
})( jQuery, window, document );
