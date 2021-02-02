import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Input() rowValue: number;
  @Input() colValue: number;
  @Input() squareValue: number;
  @Input() playerTurn: boolean;

  @Output() clickEventEmitter = new EventEmitter<number[]>();

  constructor() {}

  ngOnInit(): void {}

  getClass() {
    let top = '';
    let bottom = '';
    let right = '';
    let left = '';
    switch (this.rowValue) {
      case 0:
        bottom = 'bottom';
        break;
      case 1:
        top = 'top';
        bottom = 'bottom';
        break;
      default:
        top = 'top';
        break;
    }
    switch (this.colValue) {
      case 0:
        right = 'right';
        break;
      case 1:
        left = 'left';
        right = 'right';
        break;
      default:
        left = 'left';
        break;
    }

    return `${top} ${bottom} ${left} ${right} `;
  }
  onClick() {
    if (this.playerTurn === true && this.squareValue === 0) {
      this.clickEventEmitter.emit([this.rowValue, this.colValue]);
    }
  }
}
