const tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");

    if (input.value === "") return;

    tasks.push({
        texte: input.value,
        done: false
    });

    let li = document.createElement("li");

    li.innerHTML = "<input type='checkbox' onclick='checkTask(this)'>" + input.value;

    document.getElementById("list").appendChild(li);

    input.value = "";
}


function checkTask(checkbox) {

    let task = checkbox.parentElement;

    if (checkbox.checked) {
        task.style.textDecoration = "line-through";
        task.style.color = "gray";

        setTimeout(function () {
            task.remove();
        }, 1300);

    } else {
        task.style.textDecoration = "none";
        task.style.color = "black";
    }
}


function deleteAll() {

    document.getElementById("list").innerHTML = "";
    tasks.length = 0;

}