const form = document.querySelector('form');
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    calcAge();
});
dayInput.addEventListener('input', validateDay);
monthInput.addEventListener('input', validateMonth);
yearInput.addEventListener('input', validateYear);

function validateDay() {
    const span = document.querySelector('.dayMsg');
    if (dayInput.value < 1 || dayInput.value > 31) {
        span.style.visibility = 'visible';
        return false
    }
    span.style.visibility = 'hidden';
    return true;
}
function validateMonth() {
    const span = document.querySelector('.monthMsg');
    if (monthInput.value < 1 || monthInput.value > 12) {
        span.style.visibility = 'visible';
        return false
    }
    span.style.visibility = 'hidden';
    return true
}
function validateYear() {
    const currentYear = new Date().getFullYear();
    const span = document.querySelector('.yearMsg');
    if (yearInput.value < 1 || yearInput.value > currentYear) {
        span.style.visibility = 'visible';
        return false
    }
    span.style.visibility = 'hidden';
    return true
}

function calcAge() {
    const inputtedDate = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
    const currentDate = new Date();
    if (inputtedDate > currentDate) {
        alert('The date must not be in the future');
        form.reset();
        return
    }
    const inputtedYear = yearInput.value;
    const inputtedMonth = monthInput.value - 1;
    const inputtedDay = dayInput.value;
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    let d3, m3, y3;
    //2 current 1 bith
    y3 = currentYear - inputtedYear;

    if (currentMonth >= inputtedMonth) {
        m3 = currentMonth - inputtedMonth;
    }
    else {
        y3--;
        m3 = 12 + currentMonth - inputtedMonth;
    }

    if (currentDay >= inputtedDay) {
        d3 = currentDay - inputtedDay;
    }
    else {
        m3--;
        d3 = getDaysInMonth(inputtedYear, inputtedMonth) + currentDay - inputtedDay;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    //elements
    const daysEl = document.querySelector('.daysEl');
    const monthsEl = document.querySelector('.monthsEl');
    const yearsEl = document.querySelector('.yearsEl');

    daysEl.classList.add('fade-in-text');
    monthsEl.classList.add('fade-in-text');
    yearsEl.classList.add('fade-in-text');

    daysEl.textContent = d3;
    monthsEl.textContent = m3;
    yearsEl.textContent = y3;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();

}
