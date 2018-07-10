export default class TodoItemBean {
  static id = 0;
  constructor(text) {
    this.id = TodoItemBean.id++;
    this.text = text;
    this.completed = false;
  }
}
