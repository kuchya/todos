// CRUD
const taskNameElement = document.querySelector('#taskname');
const taskDateElement = document.querySelector('#taskdate');
const taskTimeElement = document.querySelector('#tasktime');
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
        console.log(AllTasks);
    }
}
