import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdvancedSelectComponent } from './advanced-select.component'
import { MatAutocompleteModule, MatChipsModule, MatIconModule, MatInputModule } from '@angular/material'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { OrderByPipe } from './orderBy.pipe'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('AdvancedSelectComponent', () => {
  let component: AdvancedSelectComponent
  let fixture: ComponentFixture<AdvancedSelectComponent>


  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents()
  }))


  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSelectComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })


  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
