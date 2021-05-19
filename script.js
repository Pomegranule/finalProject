// const taskName= document.getElementById("nameOfTask");
// const enterDescription= document.getElementById("taskDescription");
// const assignedTo= document.getElementById("assignTask");
// const dueDate= document.getElementById("dueDate");
// const status= document.getElementById("status");

// const searchQuotes= document.getElementById("searchQuotes");
// const searchResult= document.getElementById("searchResult");


// 1st attempt at trying to make a clone.

//function createCard(){
//     let emptyCard = document.getElementById("emptyTask");
//     let bottomBody = document.getElementsByTagName("body");
//     bottomBody.append((emptyCard).clone(true));
// }

// let emptyCard = document.getElementById("emptyCard");

// createCard.onclick = function() {
//     emptyCard.cloneNode(true);
// }

// $(document).ready(function(){
//     $("createCard").click(function(){
//       $("emptyTask").clone().appendTo("body");
//     });
//   });

// function getItems() {
//     let taskName= document.getElementById("nameOfTask");
//     let enterDescription= document.getElementById("taskDescription");
//     let assignedTo= document.getElementById("assignTask");
//     let dueDate= document.getElementById("dueDate");
//     let status= document.getElementById("status");

//     let newTask= saveChanges(taskName, enterDescription, assignedTo, dueDate, status);

//     return newTask;
// }


let taskName= document.getElementById("nameOfTask").value;
let enterDescription= document.getElementById("taskDescription");
let assignedTo= document.getElementById("assignTask");
let dueDate= document.getElementById("dueDate");
let status= document.getElementById("status");

saveChanges.onclick = function (taskName,enterDescription, assignedTo, dueDate, status) {
        let newTask = {
        "nameOfTask": taskName,
        "taskDescription": enterDescription,
        "assignTask": assignedTo,
        "dueDate": dueDate,
        "status": status,
    }
    return newTask;

}   

// localstorage.setItem("tasks", "[]")
// let list = JSON.parse(localstorage.getItem("tasks"))
localStorage.setItem(taskName, enterDescription, assignedTo, dueDate, status);
console.log(getItems(taskName, enterDescription, assignedTo, dueDate, status));


// let newTask= getItems();

// localStorage.setItem()


//     const = enterQuote.value;

//     console.log(user);
//     console.log(quote);

//     if (user && quote) {
//         localStorage.setItem(user,quote);
//         location.reload();
//     }
// };

// for (let userQuotes = 0; userQuotes < localStorage.length; userQuotes++) {
//     const user= localStorage.key(userQuotes);
//     const quote= localStorage.getItem(user);

//     favouriteQuotes.innerHTML +=`${user}: ${quote}<br />`;
// }

// This is 

// searchSubmit.onclick = function () {
//     const user= searchQuotes.value;
    
//     for (let favQuotes = 0; favQuotes < localStorage.length; favQuotes++) {
//         const user= localStorage.key(favQuotes);
//         const quote= localStorage.getItem(user);
    
//         searchResult.innerHTML =`${user}: ${quote}<br />`;
//     }

//     if (user) {
//         localStorage.getItem(user);
//         location.reload();
//     }
// }

