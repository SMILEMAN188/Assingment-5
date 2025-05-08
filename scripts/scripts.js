document.getElementById("btn-1").addEventListener("click",function (event) {
    event.preventDefault();
    const finishTask =  getInnerTextbyID("finish-task");
    const completeTask = getInnerTextbyID("completed-task");
    const container = getInnerTextbyID("container");

    alert("Board updated successfully");
    const minus = finishTask - 1;
    document.getElementById("finish-task").innerText=minus;
    const sum = completeTask + 1;
    document.getElementById("completed-task").innerText=sum
    const div = document.createElement("div")
    this.disabled=true ;

})

