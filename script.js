document.getElementById("submit").onclick = function() {
    if(document.getElementById("addTask").value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }
    else {
        document.getElementById("taskList").innerHTML += 
        `<div class="row" id="newTask">
            <div class="coloumn col-sm">
                <p id="task">
                ${document.getElementById("addTask").value}</p>
                <div class="control">
                    <button class="btn1" id="donebtn"><img src="./images/icon-check.svg" alt="icon-check"></button>
                    <button class="btn2" id="deletebtn"><img src="./images/icon-cross.svg" alt="icon-cross"></button>
                </div>
            </div>
        </div>`
    }
    let current_tasks = document.querySelectorAll("#deletebtn");
    for(let i=0; i<current_tasks.length; i++) {
        current_tasks[i].onclick = function() {
            document.getElementById("newTask").remove();
        }
    }
    let done_tasks = document.querySelectorAll("#donebtn");
    for(let i=0; i<done_tasks.length; i++) {
        done_tasks[i].onclick = function() {
            document.getElementById("task").style.textDecoration = "line-through";
        }
    }
}
