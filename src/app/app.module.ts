import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

//import { } from '@angular/animations';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram , faYoutube, faFacebook , faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faClock, faMapMarkerAlt, faEnvelope , faUserCircle , faArrowUp} from '@fortawesome/free-solid-svg-icons';

library.add(faInstagram,faYoutube, faFacebook , faTwitter,faPhone,faClock,faMapMarkerAlt,faEnvelope,faUserCircle,faArrowUp);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyBJMeD4_FeIu4R3FOyhe-4iwtlgFcYEegA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
