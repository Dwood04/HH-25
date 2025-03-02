var TaskList = [];

class Todo {

  constructor(title, date, desc) {
    this.title = title;
    this.date = date;
    this.desc = desc;
  }

}

function addTodo() {

  var title = document.getElementById("todo").value;
  var date = document.getElementById("date").value;
  var desc = document.getElementById("desc").value;
  var todo = new Todo (title, date, desc);
  TaskList.push(todo);
  return false;

}

function removeTodo() {

  TaskList.pop();
  return false;

}

function displayAllTodos() {

  var output = document.getElementById("todoOutput");
  if (!output) {

    output = document.createElement("div");
    output.id = "todoOutput";
    document.body.appendChild(output);

  }

  var html = "<ul>";
  for (var i = 0; i < TaskList.length; i++) {

    html += "<li><strong>Title:</strong> " + TaskList[i].title + 
            " <strong>Date:</strong> " + TaskList[i].date + 
            " <strong>Description:</strong> " + TaskList[i].desc + "</li>";

  }

  html += "</ul>";
  output.innerHTML = html;

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