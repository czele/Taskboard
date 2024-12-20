import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryComponent } from '../../features/category/view/category/category.component';
import { MatDividerModule } from '@angular/material/divider'
import { TaskComponent } from '../../features/task/task/task.component';

const COMPONENT = [ CategoryComponent, TaskComponent ];
const MODULES = [ MatDividerModule ];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...COMPONENT, ...MODULES],
  template: `<div class="h-screen flex w-full">
    <!-- Categorias -->
    <app-category class="w-1/4"/>

    <!-- Divisor -->
    <mat-divider class="h-full opacity-50" vertical/>

    <!-- Tarefas -->
    <app-task class="w-3/4"/>
  </div>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {

}
