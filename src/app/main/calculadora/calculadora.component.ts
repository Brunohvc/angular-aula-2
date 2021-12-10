import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  constructor() { }
  showVisor = '';

  ngOnInit() {
  }

  addCharacter(character) {
    this.showVisor += character;
  }

  executeCalc() {
    this.showVisor = eval(this.showVisor);
  }

}
