import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoItem as ToDoItemModel} from './../store/todoStore';

@Component({
  selector: 'todo-item',
  templateUrl: 'app/todoitem/todoitem.html',
  styleUrls: ['app/todoitem/todoitem.css']
    
})
export class ToDoItemComponent {
    editMode = false;
    
    @Input()
    item: ToDoItemModel;

    @Output()
    done = new EventEmitter();
    
     
    doneClicked() {
        console.log(this.done);
        this.done.next(this.item);
    }
     
    enterEditMode(element: HTMLInputElement){
       
        this.editMode = true;
        if (this.editMode) {
          setTimeout(() => { element.focus(); }, 0);
        }
        
    }


    commitEdit(updatedText: string){
        if(updatedText.length){
            this.item.text = updatedText;
            this.editMode = false;
        }
    }

    toggle() {
        console.log(this.item);
        this.item.completed = !this.item.completed;
        
    }
}