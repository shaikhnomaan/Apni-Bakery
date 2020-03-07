import { Component, OnInit } from '@angular/core';
import { MapsService} from '../app/maps.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //lat = 20.9946;
  //lng = 75.5691;

  location: object;

  constructor(private map: MapsService) {}

  ngOnInit(){
    /*this.map.getLocation().subscribe(data =>{
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    })*/

    $(document).ready(function(){

      $(window).scroll(function(){
        if($(this).scrollTop() > 40 ){ 
          $("#topBtn").fadeIn();
        }else{
          $("#topBtn").fadeOut();
        }
      });

      $("#topBtn").click(function(){
        $('html,body').animate({scrollTop : 0}, 800);
      });
    });

  }

  //----------------- Nav Bar ---------------------------
  Toggle(){
      var hamburger = document.querySelector('.hamburger');
      var navLinks  = document.getElementById('nav-links');
      var links = document.querySelectorAll('.nav-links li');
      
      navLinks.classList.toggle("open");
      links.forEach(link => {
        link.classList.toggle("fade");
      });
    }
  }
  