import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css', '../bootstrap.min.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  
	$(document).ready(function() {
		let $image = $(".responsive-image")
		$image.on('load', function(){
		  let $marginTop = $(this).height() - 100
		  $('.page-header-text').css({ 'margin-top': $marginTop}); 
		});

		$(window).resize(function(){
			let $marginTop = $image.height() - 100
			$('.page-header-text').css({ 'margin-top': $marginTop}); 
		});
	});
  }

}
