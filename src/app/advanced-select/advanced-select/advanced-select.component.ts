import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core'
import { FormControl } from '@angular/forms'
import { mocksData } from './mocks/data'
import { getTagIndex, isTagInArray } from './helper'
import { MatAutocompleteTrigger } from '@angular/material'


@Component({
  selector: 'app-advanced-select',
  templateUrl: './advanced-select.component.html'
})
export class AdvancedSelectComponent implements OnInit {
  @Input() single = false

  @Input() placeHolder = ''

  inputControl: FormControl

  @ViewChild('inputEl', { read: ElementRef }) inputEl: ElementRef
  @ViewChild('inputEl', { read: MatAutocompleteTrigger }) trigger: MatAutocompleteTrigger

  options: any = mocksData

  disableInput = false


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


    this.afterSelect()
  }


  remove(tag) {
    const tagIndex = getTagIndex(this.selectedValue, tag)


    this.selectedValue.splice(tagIndex, 1)

    this.selected = this.selectedValue

    this.disableInput = false
  }


  click() {
    this.trigger.openPanel()
  }


  private afterSelect() {
    // this.inputEl.nativeElement.blur()
  }
}
