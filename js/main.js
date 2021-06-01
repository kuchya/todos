// CRUD
const taskNameElement = document.querySelector('#taskname');
const taskDateElement = document.querySelector('#taskdate');
const taskTimeElement = document.querySelector('#tasktime');
const taskListElement = document.querySelector('#taskList');
const AllTasks = [];

function addTask() {
    const taskName = taskNameElement.value;
    const taskDate = taskDateElement.value;
    const taskTime = taskTimeElement.value;
    if (taskName && taskDate && taskTime) {
        const Task = {
            name: taskName,
            date: taskDate,
            time: taskTime
        };
        AllTasks.push(Task);
        taskNameElement.value = "";
        taskDateElement.value = "";
        taskTimeElement.value = "";
        alert("Task Added")
        // refreshList();
    }
}

function refreshList() {
    taskListElement.innerHTML = "";
    for (let i = 0; i < AllTasks.length; i++) {        
        taskListElement.innerHTML += `<li class="list-group-item">
                                            <span class="float-right badge badge-danger">
                                                &times;
                                            </span>
                                            <b>` + AllTasks[i].name + `</b> <br/>
                                            <b>Date :</b> ` + AllTasks[i].date + ` <br/>
                                            <b>Time :</b> ` + AllTasks[i].time + `
                                        </li>`;
    }
}

// Page Setup
refreshList()
