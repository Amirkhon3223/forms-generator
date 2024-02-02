import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrl: './test-select.component.scss'
})
export class TestSelectComponent {
  @Input() label!: string;
  @Input() description!: string;
  @Input() required: boolean = false;
  @Input() choices!: string[];
  selectedChoice!: string;
}
