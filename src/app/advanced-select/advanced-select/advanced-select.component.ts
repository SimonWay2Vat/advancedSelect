import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core'
import { FormControl } from '@angular/forms'
import { getTagIndex, isTagInArray } from './helper'
import { MatAutocompleteTrigger } from '@angular/material'


@Component({
  selector: 'app-advanced-select',
  templateUrl: './advanced-select.component.html'
})
export class AdvancedSelectComponent implements OnInit {
  @Input() single = false

  @Input() api = null
  @Input() placeHolder = ''
  @Input() options: any = []
  @Input() defaultColor = '#3F51B5'


  inputControl: FormControl

  @ViewChild('inputEl', { read: ElementRef }) inputEl: ElementRef
  @ViewChild('inputEl', { read: MatAutocompleteTrigger }) trigger: MatAutocompleteTrigger

  filteredOptions = []
  disableInput = false


  @Output() selectedChange = new EventEmitter()
  selectedValue = []


  @Input() get selected() {
    return this.selectedValue
  }


  getColor(tag) {
    if (typeof tag.color === 'undefined') return this.defaultColor


    return tag.color
  }


  set selected(val) {
    this.selectedValue = val
    this.selectedChange.emit(val)
  }

  constructor() {
    this.inputControl = new FormControl()
  }


  async ngOnInit() {
    if (this.selected.length && this.single) this.disableInput = true


    this.filterResultsWatcher()

    if (this.api) {
      this.options = await this.callAPI()
    }

    this.filterResults()
  }


  add(event) {
    const tag = event.option.value

    const notSelectedYet = !isTagInArray(this.selectedValue, tag)
    if (notSelectedYet) {
      if (this.single) {
        this.selected = []
        this.disableInput = true
      }

      this.selectedValue.push(tag)

      this.selected = this.selectedValue
    }


    this.afterAdd()
  }


  afterAdd() {
    this.inputEl.nativeElement.value = ''
  }


  remove(tag) {
    const tagIndex = getTagIndex(this.selectedValue, tag)


    this.selectedValue.splice(tagIndex, 1)

    this.selected = this.selectedValue

    this.disableInput = false
  }


  click() {
    this.trigger.openPanel()


    this.inputControl.setErrors({backend: {someProp: "Backend message"}})
  }


  private filterResultsWatcher() {
    this.inputControl.valueChanges.subscribe(() => {
      this.filterResults()
    })
  }


  private async filterResults() {
    if (this.api) {
      this.options = await this.callAPI()
    }

    this.filteredOptions = []
    const searchVal = this.inputEl.nativeElement.value
    // this.filteredOptions = this.options

    for (const tag of this.options) {
      tag.searchIndex = tag.label.toLocaleLowerCase().indexOf(searchVal.toLocaleLowerCase())
      if (tag.searchIndex > -1) {
        this.filteredOptions.push(tag)
      }
    }


    console.log('filter', this.inputEl.nativeElement.value)
  }

  private async callAPI() {
    console.log('callAPI')

    return []
  }
}
