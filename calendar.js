var TaskList = new list();

class list {
  constructor(item){
    var list = [];
    this.list.push(item);
  }
  addItem(item){
    this.list.push(item);
  }
  removeItem(item){
    this.list.pop(item);
  }
  getList(){
    return this.list;
  }
  clearList(){
    this.list = [];
  }
  getItem(index){
    return this.list[index];
  }
  editItem(index, item){
    this.list[index] = item;
  }
  getLength(){
    return this.list.length;
  }
}
class Todo {

  constructor(Title, Date) {
    this.Title = Title;
    this.Date = Date;
    this.Desc = '';
  }

  editTitle(Title) {
    this.Title = Title;
  }

  editDate(Date) {
    this.Date = Date;
  }

  editDesc(Desc) {
    this.Desc = Desc;
  }

  getTitle() {
    return this.Title;
  }
  
  getDate() {
    return this.Date;
  }

  getDesc() {
    return this.Desc;
  }
}
function addTodo() {
  var title = document.getElementById("todo").value;
  var date = document.getElementById("date").value;
  var todo = new Todo (title, date);
  list.addItem(Todo);
  
}

