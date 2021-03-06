import { AfterViewInit, Component } from '@angular/core';

//Modulo jquery default do modulo
import jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * AfterViewInit - É uma interface onde existe um método, cuja a função 
 * serve para iniciar depois que a view foi instânciada
 */
export class AppComponent implements AfterViewInit{
  title = 'clientes-ui';

  ngAfterViewInit(){
    (function($) {
      "use strict";
  
      // Add active state to sidbar nav links
      var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
              if (this.href === path) {
                  $(this).addClass("active");
              }
          });
  
      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }
}
