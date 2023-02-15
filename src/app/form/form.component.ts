import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {
  toDoList: string = "";
  items: any = [];
  ngOnChanges() {
    this.items.push(this.toDoList)
    console.log(this.items);
  }
  text(event: any) {
    event.srcElement.classList.toggle("myStyle")
  }
  del(i: any) {
    this.items.splice(i, 1);
    console.log(this.items);
  }
}
