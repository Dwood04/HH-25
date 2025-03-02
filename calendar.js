var TaskList = [];
var currentMonth = new Date().getMonth();
var currentYear = new Date().getFullYear();

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
  var todo = new Todo(title, date, desc);
  TaskList.push(todo);
  displayAllTodos();
  updateCalendarColors();
  return false;
}

function removeTodo() {
  var index = document.getElementById("optionsPanel").getAttribute("data-index");
  TaskList.splice(index, 1);
  displayAllTodos();
  updateCalendarColors();
  closeOptions();
}

function editTodo() {
  var index = document.getElementById("optionsPanel").getAttribute("data-index");
  var title = document.getElementById("editTitle").value;
  var date = document.getElementById("editDate").value;
  var desc = document.getElementById("editDesc").value;
  if (title !== "" && date !== "" && desc !== "") {
    TaskList[index].title = title;
    TaskList[index].date = date;
    TaskList[index].desc = desc;
    displayAllTodos();
    closeOptions();
    updateCalendarColors();
  }
}

function displayAllTodos() {
  var output = document.getElementById("todoOutput");
  if (!output) {
    output = document.createElement("div");
    output.id = "todoOutput";
    document.body.appendChild(output);
  }

  var html = "";
  for (var i = 0; i < TaskList.length; i++) {
    html += "<div class='todo-panel' onclick='showOptions(" + i + ")'>";
    html += "<div class='todo-header'>" + TaskList[i].title + "</div>";
    html += "<div class='todo-desc'>" + TaskList[i].desc + "</div>";
    html += "<div class='todo-date'>" + TaskList[i].date + "</div>";
    html += "</div>";
  }
  output.innerHTML = html;
}

function showOptions(index) {
  var panel = document.getElementById("optionsPanel");
  panel.style.display = "block";
  panel.setAttribute("data-index", index);
  document.getElementById("editTitle").value = TaskList[index].title;
  document.getElementById("editDate").value = TaskList[index].date;
  document.getElementById("editDesc").value = TaskList[index].desc;
}

function closeOptions() {
  var panel = document.getElementById("optionsPanel");
  panel.style.display = "none";
}

function dateClicked(day) {
  var output = document.getElementById("todoOutput");
  if (!output) {
    output = document.createElement("div");
    output.id = "todoOutput";
    document.body.appendChild(output);
  }

  var selectedDate = new Date(currentYear, currentMonth, day);
  var formattedDate = (selectedDate.getMonth() + 1).toString().padStart(2, '0') + '/' + selectedDate.getDate().toString().padStart(2, '0') + '/' + selectedDate.getFullYear();
  document.querySelector(".task-header h2").innerText = "Tasks for " + formattedDate;

  var html = "<h3>Tasks for " + formattedDate + "</h3>";
  for (var i = 0; i < TaskList.length; i++) {
    var taskDate = new Date(TaskList[i].date);
    if (taskDate.getUTCDate() === day && taskDate.getUTCMonth() === currentMonth && taskDate.getUTCFullYear() === currentYear) {
      html += "<div class='todo-panel' onclick='showOptions(" + i + ")'>";
      html += "<div class='todo-header'>" + TaskList[i].title + "</div>";
      html += "<div class='todo-desc'>" + TaskList[i].desc + "</div>";
      html += "<div class='todo-date'>" + TaskList[i].date + "</div>";
      html += "</div>";
    }
  }
  output.innerHTML = html;
}

function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

function updateCalendarColors() {
  var buttons = document.querySelectorAll(".date-btn");
  buttons.forEach(button => {
    button.style.backgroundColor = ""; // Reset background color
  });

  TaskList.forEach(task => {
    var taskDate = new Date(task.date);
    if (taskDate.getUTCMonth() === currentMonth && taskDate.getUTCFullYear() === currentYear) {
      var day = taskDate.getUTCDate();
      var button = document.querySelector(`.date-btn[onclick='dateClicked(${day})']`);
      if (button) {
        button.style.backgroundColor = "rgba(255, 105, 180, 0.3)"; // Slight pink tint
      }
    }
  });
}

function myFunction() {
  if (TaskList.length > 0) {
    document.body.style.backgroundColor = "lightblue";
  }
}

function myFunction1() {
  if (TaskList.pop != null) {
    document.body.style.backgroundColor = "lightgreen";
  }
}

function changeBackground() {
  document.body.style.backgroundImage = "url('https://example.com/satoru-gojo.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}

function changeMonthDropdown() {
  currentMonth = parseInt(document.getElementById("monthSelect").value);
  updateCalendar();
}

function changeYearDropdown() {
  currentYear = parseInt(document.getElementById("yearSelect").value);
  updateCalendar();
}

function updateCalendar() {
  var calendarHeader = document.getElementById("calendarHeader");
  var calendarBody = document.getElementById("calendarBody");
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  calendarHeader.innerText = monthNames[currentMonth] + " " + currentYear;

  var firstDay = new Date(currentYear, currentMonth, 1).getDay();
  var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  var html = "";
  var day = 1;
  for (var i = 0; i < 6; i++) {
    html += "<tr>";
    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        html += "<td></td>";
      } else if (day > daysInMonth) {
        html += "<td></td>";
      } else {
        html += `<td><button class="date-btn" onclick="dateClicked(${day})">${day.toString().padStart(2, '0')}</button></td>`;
        day++;
      }
    }
    html += "</tr>";
  }
  calendarBody.innerHTML = html;
  updateCalendarColors();
}

document.addEventListener("DOMContentLoaded", function() {
  var yearSelect = document.getElementById("yearSelect");
  for (var i = currentYear - 10; i <= currentYear + 10; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
  }
  yearSelect.value = currentYear;
  document.getElementById("monthSelect").value = currentMonth;
  updateCalendar();
});
