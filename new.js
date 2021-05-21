//Below= This declares taskName and links it to the input text box on my html page, where the user can name their task.
let taskName = document.getElementById("nameOfTask");
//Below= This adds an event listener that checks to see what the user has typed and whether or not it matches the criteria of "less than 20 characters" and "not empty". If it is more than 20 characters it will display a custom message. If it is empty, it will display the browser's default message.
taskName.addEventListener("input", function () {
  if ((taskName.value.length > 20) || (taskName.value.length < 0)) {
    taskName.setCustomValidity("Cannot be more than 20 characters!");
  } else {
    taskName= true;
  }
});

//Below= This declares taskDesc and links it to the input textarea on my html page, where the user can describe their task.
let taskDesc = document.getElementById("taskDescription");
//Below= This adds an event listener that checks to see what the user has typed and whether or not it matches the criteria of "less than 60 characters" and "not empty". If it is more than 60 characters it will display a custom message. If it is empty, it will display the browser's default message.
taskDesc.addEventListener("input", function () {
  if ((taskDesc.value.length > 60) || (taskDesc.value.length < 0)) {
    taskDesc.setCustomValidity("Cannot be more than 60 characters!");
  } else {
    taskDesc= true;
  }
});

//Below= This declares assignedTo and links it to the input text box on my html page, where the user can say who the task has been assigned to.
let assignedTo = document.getElementById("assignTask");
//Below= This adds an event listener that checks to see what the user has typed and whether or not it matches the criteria of "less than 20 characters" and "not empty". If it is more than 20 characters it will display a custom message. If it is empty, it will display the browser's default message.
assignedTo.addEventListener("input", function () {
  if ((assignedTo.value.length > 20) || (assignedTo.value.length < 0)) {
    assignedTo.setCustomValidity("Cannot be more than 60 characters!");
  } else {
    assignedTo= true;
  }
});


let taskCard= document.getElementById("hiddenTask");
let taskCardContent= taskCard[0];

document.taskCardContent.innerHTML;

//Below= My attempt at creating an onclick function that saves all of the data that the user put in the form.
// submitTask.onclick = function () {
//   let taskName= taskName.value;
//   let taskDesc= taskDesc.value;
//   let assignedTo= assignedTo.value;
//   let dueDate= dueDate.value;
//   let status= status.value;

//   console.log(taskName);
//   console.log(taskDesc);
//   console.log(assignedTo);
//   console.log(dueDate);
//   console.log(status);

//   if (taskName && taskDesc && assignedTo && dueDate && status) {
//       localStorage.setItem(taskName, taskDesc);
//   }
// };
// function newTask(nameOfTask, taskDescription, assignTask, dueDate, status) {
//   let newObject = {
    
//   }
// }


// I was being helped by someone else but I still don't really understand what is going on here, so I scrapped it too.

// class TaskManagement {
//   constructor(){
//     this.tasks = {}
//     this.id = 0;
    
//   }
  
//   createTaskObject (nameOfTask, taskDescription, assignTask, dueDate, status) {
//     let newTask = new Task(nameOfTask, taskDescription, assignTask, dueDate, status);
//     this.tasks[this.id] = newTask;
//     this.id++;
//   }

//   saveTaskChanges() {
//     localStorage.setItem("tasks", JSON.stringify);
//   }
// }
  // removeTask () {

  // }


  // I was trying with classes. Still don't understand them. Tried to move on to something else.

// class Task {
//   constructor(nameOfTask, newId, taskDescription, assignTask, dueDate, status) {
//     this.taskName = nameOfTask + newId;
//     this.taskDesc = taskDescription;
//     this.assignedTo = assignTask;
//     this.date = dueDate;
//     this.statusUpdate = status;
//   }
// }

// let taskName = document.getElementById("nameOfTask");

// Below = checking to see if the input of the "nameOfTask" input has changed. If it has, execute the insctructions carried out in the validateTaskForm function.
//taskName.addEventListener("input", validateTaskForm());

// Below = This function is supposed to check two things for each form input: the length and value of the input needs to be less than 20 characters and not an empty string or a space. It doesn't do that, of course, but I want it to.
// function validateTaskForm(taskName) {
  
  // let taskDesc = document.getElementById("taskDesription");
  // let assignedTo = document.getElementById("assignTask");
  
  // if (taskName.value.length > 20 || taskName.value.length < 0 || taskName.value.length == " ") {
  //   taskName.setCustomValidity("Name cannot be empty, or longer than 20 characters!");
    
  // }

  // Below are for the other two inputs on the form; the task description and who the task has been assigned to.

  // if ((taskDesc.length > 50) || (taskDesc.length == " ")) {
  //   taskDesc.setCustomValidity("Description cannot be empty, or longer than 50 characters!");
  // }

  // if ((assignedTo.length > 20) || (assignedTo.length == " ")){
  //   assignedTo.setCustomValidity("This name cannot be empty, or longer than 20 characters!");
  // }
  
  // I don't actually know what the point of this return is. I suppose the loop has to end somewhere, but I was just desperately trying anything, in order to get this function to work.
//   return validateTaskForm;
// }


// I tried to work with classes, but I still don't understand them, at all. So I have abandonned that and will try to do everything with functions.

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