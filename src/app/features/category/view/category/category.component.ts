import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MainListComponent } from '../../components/main-list/main-list.component';
import { ColorsListComponent } from '../../components/colors-list/colors-list.component';
import { CategoryService } from '../../services/category.service';
import { AsyncPipe } from '@angular/common';

const COMPONENTS = [ MainListComponent, ColorsListComponent ]

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ ...COMPONENTS ],
  template: `
    <div class="flex flex-col justify-between items-center h-full w-full">
    <!-- main-list -->
      <app-main-list />


      <!-- colors-list a-->
      <app-colors-list />
    </div>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  private readonly categoryService = inject(CategoryService);
}
