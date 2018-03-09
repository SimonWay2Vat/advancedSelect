import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'


import { AdvancedSelectComponent } from './advanced-select/advanced-select.component'
import { MatAutocompleteModule, MatChipsModule, MatIconModule, MatInputModule } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms'
import { OrderByPipe } from './advanced-select/orderBy.pipe'


@NgModule({
  declarations: [
    AdvancedSelectComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,

    ReactiveFormsModule
  ],
  exports: [
    AdvancedSelectComponent
  ]
})
export class AdvancedSelectModule {}
