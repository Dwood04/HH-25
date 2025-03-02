var TaskList = [];

function addTodo() {
  var title = document.getElementById("todo").value;
  var date = document.getElementById("date").value;
  var desc = document.getElementById("desc").value;
  var todo = new Todo (title, date, desc);
  TaskList.push(todo);
  return false;
}

function myFunction(){
  if(TaskList.length > 0){
    document.body.style.backgroundColor = "lightblue";
  }

}
function myFunction1(){
  if(TaskList.pop != null){
    document.body.style.backgroundColor = "lightgreen";
  }

}