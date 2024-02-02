import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrl: './test-input.component.scss'
})
export class TestInputComponent {
  @Input() label!: string;
  @Input() description!: string;
  @Input() required: boolean = false;
  @Input() value!: string;
}
