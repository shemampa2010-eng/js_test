const tasks = [];


function addTask() {

    let input = document.getElementById("taskInput");

    if (input.value === "") return;


    tasks.push({
        texte: input.value,
        done: false
    });


    let li = document.createElement("li");
    li.className = "task";


    li.innerHTML =
    "<input type='checkbox'>" +
    "<span>" + input.value + "</span>" +
    "<button class='sup' onclick='deleteTask(this)'>Supprimer</button>";

    let checkbox = li.querySelector("input");
    let mot = li.querySelector("span")
    let task = checkbox.parentElement;

    checkbox.addEventListener("change", function () {


        if (checkbox.checked) {
            
            mot.style.textDecoration = "line-through";
            mot.style.color = "gray";

        } else {

            mot.style.textDecoration = "none";
            mot.style.color = "black";

        }

    });


    document.getElementById("list").appendChild(li);


    input.value = "";

}



function deleteTask(button) {

    let task = button.parentElement;

    task.remove();

}



function deleteAll() {

    let allTasks = document.querySelectorAll("#list li");


    allTasks.forEach(function(task) {

        task.style.textDecoration = "line-through";
        task.style.color = "gray";


        setTimeout(function() {

            task.remove();

        }, 1300);


    });


    tasks.length = 0;

}