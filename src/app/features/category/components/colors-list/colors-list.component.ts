import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider'
import { CategoryService } from '../../services/category.service';
import { categoryBackgroundColors } from '../../constants/category-colors';

const MODULES = [ MatDividerModule ]; 

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [ ...MODULES ],
  template: `
    <section class="flex flex-col gap-4 w-full h-auto mb-4">
      <!-- Divisor -->
      <mat-divider class="h-full opacity-50" horizontal/>

      <!-- Lista de Cores -->
      <div class="flex flex-wrap justify-center item-center mt-4 px-4 gap-4">
        @for(category of categories(); track category.id) {
          <span class="select-none opacity-80 hover:opacity-100 items-center justify-center 
          {{categoryBackgroundColors[category.color]}} 
            px-4 py-2 rounded-2xl w-[90px] text-center text-white font-semibold">
            {{ category.name }}
          </span>
          <!-- teste -->
        }
      </div> 

    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsListComponent {
  private readonly categoryService = inject(CategoryService);

  public categories = this.categoryService.categories;

  public categoryBackgroundColors = categoryBackgroundColors;
}
