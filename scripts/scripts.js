document.getElementById("btn-1").addEventListener("click",function (event) {
    event.preventDefault();
    const finishTask =  getInnerTextbyID("finish-task");
    const completeTask = getInnerTextbyID("completed-task");
    

    alert("Board updated successfully");
    const minus = finishTask - 1;
    document.getElementById("finish-task").innerText=minus;
    const sum = completeTask + 1;
    document.getElementById("completed-task").innerText=sum
    
    this.disabled=true ;

})

