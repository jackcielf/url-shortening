import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortening-url',
  templateUrl: './shortening-url.component.html',
  styleUrls: ['./shortening-url.component.scss']
})
export class ShorteningUrlComponent implements OnInit {
  copiedLink: boolean;

  constructor() { }

  ngOnInit() {
  }

}
