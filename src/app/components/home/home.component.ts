import { BitlyService } from './../../services/bitly.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputValue: string;
  noValid = false;

  constructor(private bitlyService: BitlyService) {}

  ngOnInit() {}

  shortenUrl(): void {
    this.bitlyService.shortenUrl(this.inputValue).subscribe((response) => {
      console.log('URL encurtada:', response.link);
    });
  }

  submit(): void {
    if (this.inputValue) {
      this.shortenUrl();
      console.log(`lkmlsdsdflmsdf`)
    } else {
      this.noValid = true;
      console.log(`lakm`)
    }
  }

}
