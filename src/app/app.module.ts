import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { MatIconModule, 
        MatButtonModule,
        MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainSqueezeComponent } from './main-squeeze/main-squeeze.component';


@NgModule({
  declarations: [
    AppComponent,
    MainSqueezeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'roommate-divisor'),
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [AngularFirestore, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
