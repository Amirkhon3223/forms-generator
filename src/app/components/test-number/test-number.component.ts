import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrl: './test-number.component.scss'
})
export class TestNumberComponent {
  @Input() label!: string;
  @Input() description!: string;
  @Input() required: boolean = false;
  @Input() value!: number;
}
