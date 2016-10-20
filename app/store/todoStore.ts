export class TodoItem {
    text: String;
    completed: boolean;
}

export class TodoStore {
  items: TodoItem[];

  constructor() {
    this.items = [];
  }

  addItem(newItem: String) {
    this.items.push({
        text: newItem
        completed: false;
    });
  }

  removeItem(item: TodoItem) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}