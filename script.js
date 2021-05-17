// const taskName= document.getElementById("nameOfTask");
// const enterDescription= document.getElementById("taskDescription");
// const assignedTo= document.getElementById("assignTask");
// const dueDate= document.getElementById("dueDate");
// const status= document.getElementById("status");

// const searchQuotes= document.getElementById("searchQuotes");
// const searchResult= document.getElementById("searchResult");


function getItems() {
    let taskName= document.getElementById("nameOfTask");
    let enterDescription= document.getElementById("taskDescription");
    let assignedTo= document.getElementById("assignTask");
    let dueDate= document.getElementById("dueDate");
    let status= document.getElementById("status")

    let newTask= saveChanges(taskName, enterDescription, assignedTo, dueDate, status);

    return newTask;
}

saveChanges.onclick = function (nameOfTask, ) {
    let newTask = {
        "nameOfTask": nameOfTask,
        "taskDescription": taskDescription,
        "assignTask": assignTask,
        "dueDate": dueDate,
        "status": status,
    }
    return newTask;

}   

//     const = enterQuote.value;

//     console.log(user);
//     console.log(quote);

//     if (user && quote) {
//         localStorage.setItem(user,quote);
//         location.reload();
//     }
// };

for (let userQuotes = 0; userQuotes < localStorage.length; userQuotes++) {
    const user= localStorage.key(userQuotes);
    const quote= localStorage.getItem(user);

    favouriteQuotes.innerHTML +=`${user}: ${quote}<br />`;
}

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