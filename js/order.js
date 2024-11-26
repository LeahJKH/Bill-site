document.addEventListener("DOMContentLoaded", () => {
    const email = document.querySelector("#emailInput");
    const nameC = document.querySelector("#nameInput");
    const phone = document.querySelector("#numberInput");
    const orderBtn = document.querySelector("#orderBtn");
    const dateI = document.querySelector("#dateInput");

    orderBtn.addEventListener("click", (e) => {
        console.log(nameC.value);
        console.log(email.value);
        console.log(phone.value);
        console.log(dateI.value);
    });
});