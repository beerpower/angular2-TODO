import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { TodoStore }     from './store/todoStore';

import { AppComponent }  from './app.component';
import { ToDoComponent } from './todolist/todolist.component';
import { ToDoItemComponent } from './todoitem/todoitem.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
      AppComponent,
      ToDoItemComponent,
      ToDoComponent
      
  ],
  providers: [ TodoStore ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
