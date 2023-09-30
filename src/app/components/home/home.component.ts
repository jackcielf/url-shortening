import { Component, OnInit } from "@angular/core";
import { BitlyService } from "src/app/services/bitly.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  inputValue: string;
  noValid = false;
  linkShorten: string;
  urlList: any;
  disabled: boolean;
  alert_message = "Please add a link";

  constructor(private bitlyService: BitlyService) {}

  ngOnInit() {
    if (localStorage.hasOwnProperty("urlList")) {
      this.listUrls();
      this.disabled = false;
    } else {
      this.disabledButton();
    }
  }

  shortenUrl(): void {
    this.bitlyService.shortenLink(this.inputValue).subscribe((response) => {
      this.linkShorten = response.link;
      this.saveUrl(this.inputValue, this.linkShorten);
    });
  }

  saveUrl(longUrl: string, shortUrl: string): void {
    this.urlList = new Array(); // Criando um array para colocar os objetos

    // Verificando se existe a propriedade/array 'urlList' no localStorage
    if (localStorage.hasOwnProperty("urlList")) {
      this.urlList = JSON.parse(localStorage.getItem("urlList")); // Pegando os valores da propriedade/array 'urlList' e convertendo para JSON
    }

    this.urlList.push({ longUrl: longUrl, shortUrl: shortUrl }); // Adicionando um novo objeto ao array

    localStorage.setItem("urlList", JSON.stringify(this.urlList)); // Salvando no localStorage

    this.listUrls();
    this.disabled = false;
  }

  listUrls(): void {
    // Pegando os valores da propriedade/array 'urlList'
    // Convertendo para JSON
    this.urlList = JSON.parse(localStorage.getItem("urlList"));
  }

  disabledButton(): void {
    this.disabled = true;
  }

  deleteUrls(): void {
    if (localStorage.hasOwnProperty("urlList")) {
      localStorage.removeItem("urlList");
      this.listUrls();
      this.disabledButton();
    }
  }

  submit(): void {
    if (!this.verifyInput() && !this.existUrl()) {
      this.shortenUrl();
    } else if (this.existUrl()) {
      this.noValid = true;
      this.alert_message = "URL already shortened!";
    }
  }

  verifyInput(): boolean {
    if (this.inputValue) {
      this.noValid = false; // Campo valido
      return false;
    } else {
      this.alert_message = "Please add a link";
      this.noValid = true; // Campo invalido
      return true;
    }
  }

  existUrl(): any {
    if (localStorage.hasOwnProperty("urlList")) {
      this.urlList = JSON.parse(localStorage.getItem("urlList"));
      let exist = this.urlList.find(
        (item: any) => item.longUrl === this.inputValue
      );
      return !exist ? false : true;
    }
  }
}