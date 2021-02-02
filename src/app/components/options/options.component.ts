import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
})
export class OptionsComponent implements OnInit {
  @Output() toggleEventEmitter = new EventEmitter<boolean>();
  hardMode = false;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.hardMode = !this.hardMode;
    this.toggleEventEmitter.emit(this.hardMode);
  }
}
