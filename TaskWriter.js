let li = document.getElementsByClassName("task-item");
let inp = document.getElementsByClassName("task-input");
let tsk = document.querySelector(".tasks");
let donetsk = document.querySelector(".done-tasks");

let ogtask;
var i = 0;
let j = 0;

function OnTaskClick() {
    for (i = 0; i < li.length; i++) {
        if (inp[i].checked === false) {
            li[i].style.textDecoration = "none";
        } else {
            li[i].style.textDecoration = "line-through";
            MoveTodoneTask(i); // Callback for Function
        }
    }
}
// when Task Finishes This will append the Li element to Task Finished ul element
function MoveTodoneTask(i) {
    donetsk.appendChild(li[i]);
}

let butn = document.getElementById('addtsk');
butn.addEventListener('click', addTask, true);

// This function will Prompt user for Task
// If task no Specified Throws a Alert window
// ogtask will be added to li as h3 text
function addTask() {
    ogtask = prompt("Enter your task", "Jogging");
    if (ogtask !== "") {
        let li = document.createElement("li");
        let att = document.createAttribute("class");
        att.value = "task-item";
        li.setAttributeNode(att);
        console.log("created a element")
        li.innerHTML = `<label id="inp-tsk"><input type="checkbox" onclick="OnTaskClick()" name="" id="inp-tsk" class="task-input"><h3>${ogtask}</h3></label>`;
        j++;
        tsk.appendChild(li);
    } else {
        let ogtask = alert("You should not have a empty task");
    }
}