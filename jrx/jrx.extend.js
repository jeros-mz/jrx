/*	
 *	jrx.extend
 *	
 *	Copyright (c) 2014 MZ jeros
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
(function( $, window, document){
	'use strict';
	
	
	jrx.define('g', function(fn){
		$(function(){
			if($.isFunction(fn)){
				fn();
			}
		});
	});
	
	jrx.define('p', function(fn){
		$(function(){
			if($.isFunction(fn)){
				fn();
			}
		});
	});
	
	jrx.define('isString', function(obj){
		return $.type(obj) === 'string';
	});
	
	jrx.define('isNumber', function(obj){
		return $.type(obj) === 'number';
	});
	
	jrx.define('isArray', function(obj){
		return $.type(obj) === 'array';
	});
	
	jrx.define('isBoolean', function(obj){
		return $.type(obj) === 'boolean';
	});
	
	jrx.define('isObject', function(obj){
		return $.type(obj) === 'object';
	});
	
	jrx.define('isEmail', function(obj){
		return $.regexp('email').test(obj);
	});
	
	jrx.define('isUrl', function(obj){
		return $.regexp('url').test(obj);
	});
	
	jrx.define('isDate', function(obj){
		return !/Invalid|NaN/.test(new Date(obj).toString());
	});
	
	/*
	 * @define : validate
	 * @desc : init, extend validate
	 */
	jrx.define('validate.init', function(){
		/*
        * @name : set jquery.validate extend
        * @depends : {plugin} jquery.validate
        */
       	if($.type($.fn.validate) === 'function'){
   			   			
   			$.extend($.validator.messages, {
                required: jrx.language.validate.required,
                remote: jrx.language.validate.remote,
                email: jrx.language.validate.email,
                url: jrx.language.validate.url,
                date: jrx.language.validate.date,
                dateISO: jrx.language.validate.dateISO,
                number: jrx.language.validate.number,
                digits: jrx.language.validate.digits,
                creditcard: jrx.language.validate.creditcard,
                equalTo: jrx.language.validate.equalTo,
                length: $.validator.format(jrx.language.validate.length),
                maxlength: $.validator.format(jrx.language.validate.maxlength),
                minlength: $.validator.format(jrx.language.validate.minlength),
                rangelength: $.validator.format(jrx.language.validate.rangelength),
                range: $.validator.format(jrx.language.validate.range),
                max: $.validator.format(jrx.language.validate.max),
                min: $.validator.format(jrx.language.validate.min),
                engnum : $.validator.format(jrx.language.validate.engnum),
                count: $.validator.format(jrx.language.validate.count)
            });            

            $.validator.addMethod('engnum', function(value, element, params){
                return this.optional(element) || jrx.regexp('engnum').test(value);
		    });

            $.validator.addMethod('length', function(value, element, params){
			    return this.optional(element) || value.length == element.getAttribute('length');
		    });
            
            // addMethod : count
    		$.validator.addMethod('count', function(value, element, params){
    			return this.optional(element) || value >= params[0];
    		});
    		
            $.validator.setDefaults({
                ignore: '',
                ignoreTitle: true,
                onkeyup: false,
                onfocusout: false,
                onclick : false,
                focusInvalid: true,
                showErrors: function (errorMap, errorList) {

                    if (errorList.length === 0) return false;

                    var labelWrap = $('<div />').addClass('label-lists'), 
                    	textMessage = '';
					
                    $.each(errorList, function (i, v) {
                        var _$element = $(v.element);
                        
                        if (i == 0) {
                            textMessage = _$element.data('message') || (getMessage(_$element) + (errorMap[v.element.name] || ''));
                            _$element.focus();
                        }
                    });

                    function getMessage(_$element) {
                    	
                    	
                        return _$element.data('title')
						    || _$element.attr('title')
						    || _$element.parent().find('>label').text()
						    || _$element.parent('label').text()
						    || _$element.attr('placeholder')
						    || _$element.attr('name');
                    };

					if(!jrx.config('useAlert') && $.isfunction($.stateAlarm)){
						$.stateAlarm(textMessage);	
					} else {
						alert(textMessage);
					}
                    
                    return;
                },
                submitHandler: function (form) { form.submit(); }
            });
       	}
	});
	
})( jQuery, window, document );