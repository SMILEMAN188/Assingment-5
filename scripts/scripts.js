document.getElementById("btn-1").addEventListener("click",function (event) {
    event.preventDefault();
    const finishTask =  getInnerTextbyID("finish-task");
    const completeTask = getInnerTextbyID("completed-task");
    const taskName= document.getElementById("task-name-1").innerText;
    const today = new Date();

    alert("Board updated successfully");
    const minus = finishTask - 1;
    document.getElementById("finish-task").innerText=minus;
    const sum = completeTask + 1;
    document.getElementById("completed-task").innerText=sum;
    const div = document.createElement("div");
    div.innerHTML=`
    <h1 class="bg-[#F4F7FF] p-2 rounded-lg m-2 font-light text-sm ">You have copleted the task <br> ${taskName} at ${today.toLocaleTimeString()} </h1>
    `;
    document.querySelector(".container").appendChild(div);
    this.disabled=true ;

})

document.getElementById("btn-2").addEventListener("click",function (event) {
    event.preventDefault();
    const finishTask =  getInnerTextbyID("finish-task");
    const completeTask = getInnerTextbyID("completed-task");
    const taskName= document.getElementById("task-name-2").innerText;
    const today = new Date();

    alert("Board updated successfully");
    const minus = finishTask - 1;
    document.getElementById("finish-task").innerText=minus;
    const sum = completeTask + 1;
    document.getElementById("completed-task").innerText=sum;
    const div = document.createElement("div");
    div.innerHTML=`
    <h1 class="bg-[#F4F7FF] p-2 rounded-lg m-2 font-light text-sm ">You have copleted the task <br> ${taskName} at ${today.toLocaleTimeString()} </h1>
    `;
    document.querySelector(".container").appendChild(div);
    this.disabled=true ;

})
document.getElementById("btn-3").addEventListener("click",function (event) {
    event.preventDefault();
    const finishTask =  getInnerTextbyID("finish-task");
    const completeTask = getInnerTextbyID("completed-task");
    const taskName= document.getElementById("task-name-3").innerText;
    const today = new Date();

    alert("Board updated successfully");
    const minus = finishTask - 1;
    document.getElementById("finish-task").innerText=minus;
    const sum = completeTask + 1;
    document.getElementById("completed-task").innerText=sum;
    const div = document.createElement("div");
    div.innerHTML=`
    <h1 class="bg-[#F4F7FF] p-2 rounded-lg m-2 font-light text-sm ">You have copleted the task <br> ${taskName} at ${today.toLocaleTimeString()} </h1>
    `;
    document.querySelector(".container").appendChild(div);
    this.disabled=true ;

})
document.getElementById("btn-4").addEventListener("click",function (event) {
    event.preventDefault();
    const finishTask =  getInnerTextbyID("finish-task");
    const completeTask = getInnerTextbyID("completed-task");
    const taskName= document.getElementById("task-name-4").innerText;
    const today = new Date();

    alert("Board updated successfully");
    const minus = finishTask - 1;
    document.getElementById("finish-task").innerText=minus;
    const sum = completeTask + 1;
    document.getElementById("completed-task").innerText=sum;
    const div = document.createElement("div");
    div.innerHTML=`
    <h1 class="bg-[#F4F7FF] p-2 rounded-lg m-2 font-light text-sm ">You have copleted the task <br> ${taskName} at ${today.toLocaleTimeString()} </h1>
    `;
    document.querySelector(".container").appendChild(div);
    this.disabled=true ;

})
document.getElementById("btn-5").addEventListener("click",function (event) {
    event.preventDefault();
    const finishTask =  getInnerTextbyID("finish-task");
    const completeTask = getInnerTextbyID("completed-task");
    const taskName= document.getElementById("task-name-5").innerText;
    const today = new Date();

    alert("Board updated successfully");
    const minus = finishTask - 1;
    document.getElementById("finish-task").innerText=minus;
    const sum = completeTask + 1;
    document.getElementById("completed-task").innerText=sum;
    const div = document.createElement("div");
    div.innerHTML=`
    <h1 class="bg-[#F4F7FF] p-2 rounded-lg m-2 font-light text-sm ">You have copleted the task <br> ${taskName} at ${today.toLocaleTimeString()} </h1>
    `;
    document.querySelector(".container").appendChild(div);
    this.disabled=true ;

})
document.getElementById("btn-6").addEventListener("click",function (event) {
    event.preventDefault();
    const finishTask =  getInnerTextbyID("finish-task");
    const completeTask = getInnerTextbyID("completed-task");
    const taskName= document.getElementById("task-name-6").innerText;
    const today = new Date();

    alert("Board updated successfully");
    const minus = finishTask - 1;
    document.getElementById("finish-task").innerText=minus;
    const sum = completeTask + 1;
    document.getElementById("completed-task").innerText=sum;
    const div = document.createElement("div");
    div.innerHTML=`
    <h1 class="bg-[#F4F7FF] p-2 rounded-lg m-2 font-light text-sm ">You have copleted the task <br> ${taskName} at ${today.toLocaleTimeString()} </h1>
    `;
    document.querySelector(".container").appendChild(div);
    this.disabled=true ;
if (finishTask -1 === 0) {
        alert("Congrates !!! You have completed all the current")
    }
    else{

    }
})
