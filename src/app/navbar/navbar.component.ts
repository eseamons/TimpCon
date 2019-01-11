import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../bootstrap.min.css', './navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }


  ngOnInit() {

	$(document).ready(function() {
		let $image = $(".responsive-image")
		$image.on('load', function(){
		  let $marginTop = $(this).height() - 100
		  $('.page-header-text').css({ 'margin-top': $marginTop}); 
		});
		
		setTimeout(function() { //This is necessary because there is trouble with loading ie and Microsoft Edge
			if (/Edge/.test(navigator.userAgent)) {
				let $marginTop = 	$image.height() - 100
				$('.page-header-text').css({ 'margin-top': $marginTop}); 
			}
		  
		}, 0);

		$(window).resize(function(){
			let $marginTop = $image.height() - 100
			$('.page-header-text').css({ 'margin-top': $marginTop}); 
		});
	});
  }

}
