import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { OneRoom } from '../one-room'; 

@Component({
  selector: 'app-main-squeeze',
  templateUrl: './main-squeeze.component.html',
  styleUrls: ['./main-squeeze.component.css']
})

export class MainSqueezeComponent implements OnInit {

  allTheRooms: OneRoom[] = [];
  testRoom: OneRoom = {
    length: 10,
    width: 8,
    sqFeet: 80
  };

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'fast_forward',
        sanitizer.bypassSecurityTrustResourceUrl('assets/ic_fast_forward_black_24px.svg'));
    iconRegistry.addSvgIcon(
        'fast_rewind',
        sanitizer.bypassSecurityTrustResourceUrl('assets/ic_fast_rewind_black_24px.svg'));
  }

  ngOnInit() {
    this.allTheRooms.push(this.testRoom);
  }

  onClickMinus() {
    this.allTheRooms.pop();
  }
  onClickPlus() {
    this.allTheRooms.push(this.testRoom);
  }

}
