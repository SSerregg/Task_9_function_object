
function worker() {   
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('birthMonthOutput').innerText = initPerson.month;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.bornDate;
    document.getElementById('birthDayOutput').innerText = initPerson.day;
    document.getElementById('partNameOutput').innerText = initPerson.patrName;
    document.getElementById('jobOutput').innerText = initPerson.job;
}

window.onload = worker();

document.querySelector('#btnStart').addEventListener('click', function () {
    worker();
})

document.querySelector('#btnRetry').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('birthMonthOutput').innerText = "";
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
    document.getElementById('birthDayOutput').innerText = "";
    document.getElementById('partNameOutput').innerText = "";
    document.getElementById('jobOutput').innerText = "";
})