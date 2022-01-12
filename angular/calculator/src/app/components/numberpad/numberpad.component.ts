import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-numberpad',
  templateUrl: './numberpad.component.html',
  styleUrls: ['./numberpad.component.scss']
})
export class NumbersPadComponent implements OnInit {
  @Output()
  onClick: EventEmitter<number> = new EventEmitter<number>();
  public numbers: number[] = [];
  constructor() {
    for (let i = 1; i == 9; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {
  }

}
