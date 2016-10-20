"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todoStore_1 = require('./../store/todoStore');
var todoitem_component_1 = require('./../todoitem/todoitem.component');
var ToDoComponent = (function () {
    function ToDoComponent(store) {
        this.newItem = '';
        this.store = store;
        //this.store.addItem('brada');
    }
    ToDoComponent.prototype.addItem = function () {
        if (this.newItem.length) {
            this.store.addItem(this.newItem);
            this.newItem = '';
        }
    };
    ToDoComponent.prototype.removeItem = function (item) {
        this.store.removeItem(item);
    };
    ToDoComponent = __decorate([
        core_1.Component({
            selector: 'todo-list',
            templateUrl: 'app/todolist/todolist.html',
            styleUrls: ['app/todolist/todolist.css'],
            directives: [todoitem_component_1.TodoItem]
        }), 
        __metadata('design:paramtypes', [todoStore_1.TodoStore])
    ], ToDoComponent);
    return ToDoComponent;
}());
exports.ToDoComponent = ToDoComponent;
//# sourceMappingURL=todolist.component.js.map