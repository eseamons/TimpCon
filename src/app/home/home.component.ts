import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../bootstrap.min.css', './home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit() {
	
	$(document).ready(function() {
		let $image = $(".responsive-image")
		let $video = $('.timpcon-video')
		let $video_wrapper = $('.timp-video-wrapper')
		
		$image.on('load', function(){
		  let $height = $(this).height() - 100
		  let $width = $(this).width()
		  $video.css({'height': $height});
		});
		
		setTimeout(function() { //This is necessary because there is trouble with loading ie and Microsoft Edge
			if (/Edge/.test(navigator.userAgent)) {
				let $height = $image.height() - 100
				let $width = $(this).width()

				$video.css({'height': $height});
			}
		  
		}, 0);

		$(window).resize(function(){
			let $height = $image.height() - 100
			let $width = $(this).width()
			$video.css({'height': $height});
		});
	});
	
  }
}
