import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input()
  checked: boolean = false;

  @Output()
  onCheck: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.onCheck.emit(!this.checked);
  }
}
