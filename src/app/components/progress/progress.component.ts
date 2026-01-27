import { Component, computed, input, Input, InputSignal, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'app-progress',
    imports: [SharedModule],
    templateUrl: './progress.component.html',
    styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  readonly value: InputSignal<number> = input.required();

  readonly max: InputSignal<number> = input.required();

  readonly ratio = computed(() => this.value() / this.max());

}
