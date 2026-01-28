import { Component, computed, input, Input, InputSignal, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-done',
  imports: [SharedModule],
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss'
})
export class DoneComponent {
  readonly correct: InputSignal<number> = input.required();

  readonly total: InputSignal<number> = input.required();

  readonly score = computed(() => this.correct() / this.total());

}
