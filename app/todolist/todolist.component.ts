import { Component , Injector }  from '@angular/core';
import { TodoStore } from './../store/todoStore';
import { TodoItem } from './../todoitem/todoitem.component';

@Component({
    selector: 'todo-list',
    templateUrl: 'app/todolist/todolist.html',
    styleUrls: ['app/todolist/todolist.css'],
    directives: [TodoItem]
})
export class ToDoComponent {
    newItem = '';


    store: TodoStore;

    constructor(store: TodoStore) {
        this.store = store;
        
        //this.store.addItem('brada');
    }

    addItem() {
        if(this.newItem.length){
            this.store.addItem(this.newItem);
            this.newItem = '';
        }
        
    }

    removeItem(item: TodoModelItem) {
        this.store.removeItem(item);
    }
}