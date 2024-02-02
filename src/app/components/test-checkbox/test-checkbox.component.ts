import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrl: './test-checkbox.component.scss'
})
export class TestCheckboxComponent {
  @Input() label!: string;
  @Input() description!: string;
  @Input() choices!: string[];
  selectedChoices: { [key: string]: boolean } = {};

  constructor() {
    this.choices.forEach(choice => {
      this.selectedChoices[choice] = false;
    });
  }
}
