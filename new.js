// let name = document.querySelector("#")



// let taskName = document.getElementById("nameOfTask");

// taskName.addEventListener("input", function () {
//   if (taskName.value.length > 20) {
//     taskName.setCustomValidity("Cannot be more than 20 characters!");
//   } else {
//     taskName.setCustomValidity("");
//   }
// });

// let taskDesc = document.getElementById("taskDescription");

// taskDesc.addEventListener("input", function () {
//   if ((taskDesc.value.length > 60) || (taskDesc.value.length < 0)) {
//     taskDesc.setCustomValidity("Cannot be more than 60 characters!");
//   } else {
//     taskDesc.setCustomValidity("");
//   }
// });

// let taskName = document.getElementById("nameOfTask");

// taskName.addEventListener("input", function () {
//   if (taskName.value.length > 20) {
//     taskName.setCustomValidity("Cannot be more than 20 characters!");
//   } else {
//     taskName.setCustomValidity("");
//   }
// });

// function newTask(nameOfTask, taskDescription, assignTask, dueDate, status) {
//   let newObject = {
    
//   }
// }

class TaskManagement {
  constructor(){
    this.tasks = {}
    this.id = 0;
    
  }
  
  createTaskObject (nameOfTask, taskDescription, assignTask, dueDate, status) {
    let newTask = new Task(nameOfTask, taskDescription, assignTask, dueDate, status);
    this.tasks[this.id] = newTask;
    this.id++;
  }

  saveTaskChanges () {
    localStorage.setItem("tasks", JSON.stringify);
  }
}
  // removeTask () {

  // }


class Task {
  constructor(nameOfTask, newId, taskDescription, assignTask, dueDate, status) {
    this.taskName = nameOfTask + newId;
    this.taskDesc = taskDescription;
    this.assignedTo = assignTask;
    this.date = dueDate;
    this.statusUpdate = status;
  }
}



// class Task {
//     constructor(id, name, description, assigned, due, status){
//         this.id = id;
//         this.name = name;
//         this.assigned = assigned;
//         this.description = description;
//         this.dueDate = due;
//         this.status = status;
//     };
// }