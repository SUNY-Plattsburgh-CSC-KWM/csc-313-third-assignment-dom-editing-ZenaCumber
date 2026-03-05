// A simple class representing a to-do item.
class WorkItem {

    #task;
    #dueDate;
    #priority;
    #done;

    constructor(task, dueDate, priority) {
        this.#task = task;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#done = false;
    }

    getTask() {
        return this.#task;
    }

    getDueDate() {
        return this.#dueDate;
    }

    getPriority() {
        return this.#priority;
    }

    getDone() {
        return this.#done;
    }

    setDone(value) {
        this.#done = value;
    }
}

// Array containing the current list of work items.
let workItems = [];

/*
 * redraw: Empty the div of all items. For each work item in your
 * array, create a new paragraph that contains the item number,
 * task, due date, and priority. If done = green, if not = red.
 */
function redraw() {

    const container = document.getElementById("tasks");

    container.innerHTML = "";

    for (let i = 0; i < workItems.length; i++) {

        const item = workItems[i];

        const p = document.createElement("p");

        p.textContent =
            i + ": " +
            item.getTask() +
            " – due " +
            item.getDueDate() +
            " – priority " +
            item.getPriority();

        if (item.getDone()) {
            p.style.color = "green";
        } else {
            p.style.color = "red";
        }

        container.appendChild(p);
    }
}

/*
 * addItem: Prompt for task, due date, and priority.
 * Create item, push to array, redraw.
 */
function addItem() {

    const task = prompt("Enter task description:");
    const dueDate = prompt("Enter due date:");
    const priority = prompt("Enter priority:");

    const item = new WorkItem(task, dueDate, priority);

    workItems.push(item);

    redraw();
}

/*
 * completeItem: Ask for task number and mark done.
 */
function completeItem() {

    const index = parseInt(prompt("Enter task number to mark complete:"));

    if (!isNaN(index) && index >= 0 && index < workItems.length) {
        workItems[index].setDone(true);
    }

    redraw();
}
