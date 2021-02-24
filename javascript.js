const clearElement = document.getElementsByClassName("fas fa-sync-alt");
const dateElement = document.getElementById("date");
const listElement = document.getElementById("list");
const inputElement = document.getElementById("input");

const UNCHECK = "fa-circle";
const UNCHECKpre = "far"
const CHECK = "fa-check-circle";
const CHECKpre = "fas";

let id = 0;
let LIST = [];

inputElement.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        if (inputElement.value) {
            addListItem(listElement, inputElement.value, id, false, false);
            LIST.push(
                {
                    name: inputElement.value,
                    id: id,
                    done: false,
                    trash: false
                }
            );
            inputElement.value = "";
            id++;
        }
    }
});

listElement.addEventListener("click", function(event) {
    let element = event.target;
    let elementJob = event.target.attributes.job.value;

    if (elementJob == "complete") {
        completeListItem(element);
    } else if (elementJob == "delete") {
        removeListItem(element);
    }
});

function addListItem (element, toDo, id, done, trash) {
    if (trash) {return;}

    const DONE = done ? (CHECKpre + " " + CHECK) : (UNCHECKpre + " " + UNCHECK);

    str =   `<li>
                <i class= "${DONE}" job="complete" id="${id}"></i>
                <p class="text">${toDo}</p>
                <i class="fas fa-trash" job="delete" id="${id}"></i>
            </li>`
    element.insertAdjacentHTML("beforeend", str);
}

function completeListItem (element) {
    element.classList.toggle(CHECKpre);
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECKpre);
    element.classList.toggle(UNCHECK);
}

function removeListItem (element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}