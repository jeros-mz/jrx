/*	
 *	jrx.layer
 *	
 *	Copyright (c) 2014 MZ jeros
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
(function( $, window, document){
	'use strict';
	
	// 속성 :
	// position : absolute, fixed.
	// mask 설정 여부.
	// 자동으로 사라지는 여부.
	
	function Layer () {
		
		// TODO :
		// 생성
		// 삭제
		//
		this.create = function () {
			console.log('::Layer > create');
		};
		this.destroy = function () {};
		
	}
	
	function LayerPopup () {
		
		// TODO :
		// 상속
		//
		
		Layer.call(this);
		
		this.create = function () {
			console.log('::LayerPopup > create');
		};
	}
	
	function LayerTooltip () {
		
		// TODO :
		// 생성
		// 삭제
		//
		
		Layer.call(this);
		
	}
	
	// TODO :
	// 기본기능, 인터페이스는 부모인 Layer 에서 상속 받는다.
	// Layer 구조로 작성되는 모든 모듈을 지원한다.
	// 컨텐츠와의 종속성을 제거한다.
	
	
	/*
	 * @define : validate
	 * @desc : init, extend validate
	 */
	jrx.define('layer.init', function(){
		
	});
	
})( jQuery, window, document );

