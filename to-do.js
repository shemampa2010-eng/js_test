const tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");

    if (input.value === "") return;

    tasks.push({
        texte: input.value,
        done: false
    });

    let index = tasks.length - 1;

    let li = document.createElement("li");
    li.className = "task";

    li.innerHTML =
    "<input type='checkbox'>" +
    "<span>" + input.value + "</span>" +
    "<button class='sup' onclick='deleteTask(this)'>Supprimer</button>";

    document.getElementById("list").appendChild(li);

    input.value = "";

    console.log(tasks);
}


function deleteTask(button) {

    let task = button.parentElement;

    task.remove();

}


function checkTask(checkbox) {

    let task = checkbox.parentElement;

    if (checkbox.checked) {

        task.style.textDecoration = "line-through";
        task.style.color = "gray";

    } else {

        task.style.textDecoration = "none";
        task.style.color = "black";

    }
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