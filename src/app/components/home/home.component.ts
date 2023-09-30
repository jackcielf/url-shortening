import { Component, OnInit } from '@angular/core';
import { BitlyService } from 'src/app/services/bitly.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputValue: string; 
  noValid = false;
  linkEncurtado: string = '';

  constructor(private bitlyService: BitlyService) {}

  ngOnInit() {}

  shortenUrl(): void {
    this.bitlyService.shortenLink(this.inputValue).subscribe((response) => {
      this.linkEncurtado = response.link;
    });
  }

  submit(): void {
    if (!this.verifyInput()) {
      this.shortenUrl();
    }
  }
  
  verifyInput(): boolean {
    if (this.inputValue) {
      this.noValid = false; // Campo valido
      return false;
    } else {
      this.noValid = true; // Campo invalido
      return true;
    }
  }
}