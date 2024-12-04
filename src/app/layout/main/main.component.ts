import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  template: `<p>Main works</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {

}
