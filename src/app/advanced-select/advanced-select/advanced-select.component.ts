import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl } from '@angular/forms'
import { mocksData } from './mocks/data'
import { getTagIndex, isTagInArray } from './helper'


@Component({
  selector: 'app-advanced-select',
  templateUrl: './advanced-select.component.html'
})
export class AdvancedSelectComponent implements OnInit {
  disableInput = false
  @Input() single = false
  @Input() placeHolder = ''

  inputControl: FormControl

  options: any = mocksData

  @Output() selectedChange = new EventEmitter()
  selectedValue = []


  @Input() get selected() {
    return this.selectedValue
  }

  set selected(val) {
    this.selectedValue = val
    this.selectedChange.emit(val)
  }

  constructor() {
    this.inputControl = new FormControl()
  }


  ngOnInit() {
    if (this.selected.length && this.single) this.disableInput = true
  }


  add(event) {
    const tag = event.option.value

    const notSelectedYet = !isTagInArray(this.selectedValue, tag)
    if (notSelectedYet) {
      this.selectedValue.push(tag)

      this.selected = this.selectedValue

      if (this.single) this.disableInput = true
    }
  }


  remove(tag) {
    const tagIndex = getTagIndex(this.selectedValue, tag)


    this.selectedValue.splice(tagIndex, 1)

    this.selected = this.selectedValue

    this.disableInput = false
  }
}
