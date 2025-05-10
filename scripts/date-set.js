function dateEvent() {
    const today = new Date();
    const dayNow= today.toDateString();
    
    
    const dayUpdate = document.getElementById("date-now");
    if (dayUpdate) {
        dayUpdate.innerText = dayNow;
    }

}

