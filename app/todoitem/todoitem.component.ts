import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoItem as ToDoItemModel} from './../store/todoStore';

@Component({
  selector: 'todo-item',
  templateUrl: 'app/todoitem/todoitem.html',
  styleUrls: ['app/todoitem/todoitem.css']
    
})
export class ToDoItemComponent {
    @Input()
    item: ToDoItemModel;

    @Output()
    done = new EventEmitter();
    
     
    doneClicked() {
        console.log(this.done);
        this.done.next(this.item);
    }
}