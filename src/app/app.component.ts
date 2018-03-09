import { Component } from '@angular/core'
import { mocksData } from './mocks/data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selected = [
    {
      id: 1,
      label: 'item 1'
    }
  ]


  options = mocksData
}
