import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
dolar : number = 0;
euro : number = 0;
libras : number = 0;
real : number = 0;
resultado : string = "";

Conversor() : void  {
  this.resultado = "$ " + (this.real / this.dolar).toFixed(4)
    + "\n" + "€ " + (this.real / this.euro).toFixed(4)
    + "\n" + "£ " + (this.real / this.libras).toFixed(4);
}

}
