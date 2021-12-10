import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  constructor() { }
  @Input() value: string;
  @Output() onClick = new EventEmitter<string>();

  ngOnInit() {
  }

  cliked() {
    this.onClick.emit(this.value);
  }

}
