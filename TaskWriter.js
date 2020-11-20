let li = document.getElementsByClassName("task-item");
let inp = document.getElementsByClassName("task-input");
let tsk = document.querySelector(".tasks");

var i = 0;
function OnTaskClick() {
    for (i = 0; i < li.length; i++) {
        if (inp[i].checked === false) {
            li[i].style.textDecoration = "none";
        } else {
            li[i].style.textDecoration = "line-through";
        }
    }
}
let butn = document.getElementById('addtsk');
butn.addEventListener('focus', noOutline, true);
butn.addEventListener('click', addTask, true);
function noOutline() {
    butn.style.outline = "none";
}

let j = 5;
function addTask() {
    let ogtask = prompt("Enter your task", "Jogging");
    if (ogtask !== "") {
        let li = document.createElement("li");
        let att = document.createAttribute("class");
        att.value = "task-item";
        li.setAttributeNode(att);
        console.log("created a element")
        li.innerHTML = `<input type="checkbox" onclick="OnTaskClick()" name="" id="" class="task-input"><h3>${ogtask}</h3>`;
        // if (j > 10) { li.style.display = "none" };
        j++;
        tsk.appendChild(li);
    }else{
        let ogtask = alert("You should not have a empty task");        
    }
}