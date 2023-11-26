// Function to get the current week's start date (Sunday)
function getCurrentWeekStartDate() {
    const today = new Date();
    const currentDay = today.getDay();
    const diff = today.getDate() - currentDay + (currentDay === 0 ? 0 : (7 - currentDay)); // Adjust to Sunday if today is not Sunday
    const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - currentDay);

    return startDate;
}

//Function to format the date in the format "weekDay dd month yyyy"
function formatDate(date) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = date.getDate();
    const weekday = weekdays[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${weekday} ${day} ${month} ${year}`;
}

// Display current week's start date on the web page
document.addEventListener('DOMContentLoaded', function () {
    const startDate = getCurrentWeekStartDate();
    const formattedStartDate = formatDate(startDate);
    const currentWeekDatesElement = document.getElementById('currentWeekDates');
    currentWeekDatesElement.textContent = `Current Week Starts on: ${formattedStartDate}`;
});






//More Part:
document.addEventListener('DOMContentLoaded', function() {
    var moreButtons = document.querySelectorAll('.button');
    
    moreButtons.forEach(function(moreButton) {
        moreButton.addEventListener('click', function() {
            var listBox = this.closest('.KListBox');
            var additionalNames = listBox.querySelector('.additional');
            additionalNames.style.display = (additionalNames.style.display === 'none' || additionalNames.style.display === '') ? 'block' : 'none';
            listBox.classList.toggle('expanded');
            this.innerText = (additionalNames.style.display === 'none' || additionalNames.style.display === '') ? 'MORE' : 'LESS';
        });
    });
});
