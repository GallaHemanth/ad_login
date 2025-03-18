import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
// import { AppRoutingModule } from './app-routing/app-routing.module';
import { MyloginComponent } from "./mylogin/mylogin.component";
import { MyregisterComponent } from "./myregister/myregister.component";
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'my_form_25';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Navigation End:', event.url);
      }
    });
  }

}