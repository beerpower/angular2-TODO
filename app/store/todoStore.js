"use strict";
var TodoItem = (function () {
    function TodoItem() {
    }
    return TodoItem;
}());
exports.TodoItem = TodoItem;
var TodoStore = (function () {
    function TodoStore() {
        this.items = [];
    }
    TodoStore.prototype.addItem = function (newItem) {
        this.items.push({
            text: newItem
        });
    };
    TodoStore.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        this.items.splice(index, 1);
    };
    return TodoStore;
}());
exports.TodoStore = TodoStore;
//# sourceMappingURL=todoStore.js.map