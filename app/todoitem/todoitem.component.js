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
var ToDoItemComponent = (function () {
    function ToDoItemComponent() {
        this.done = new core_1.EventEmitter();
    }
    ToDoItemComponent.prototype.doneClicked = function () {
        console.log(this.done);
        this.done.next(this.item);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todoStore_1.TodoItem)
    ], ToDoItemComponent.prototype, "item", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ToDoItemComponent.prototype, "done", void 0);
    ToDoItemComponent = __decorate([
        core_1.Component({
            selector: 'todo-item',
            templateUrl: 'app/todoitem/todoitem.html',
            styleUrls: ['app/todoitem/todoitem.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ToDoItemComponent);
    return ToDoItemComponent;
}());
exports.ToDoItemComponent = ToDoItemComponent;
//# sourceMappingURL=todoitem.component.js.map