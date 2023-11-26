 document.addEventListener('DOMContentLoaded', function () {
           function handleSubmit(event) {
                event.preventDefault(); 

                var selectedCourse = document.getElementById('list').value;
                if (selectedCourse == 0) {
                    alert("Please select a course.");
                    return;
                }

                var rating = document.querySelector('.star-rating input:checked');
                if (!rating) {
                    alert("Please select a rating.");
                    return;
                }

                var courseName = document.getElementById('list').options[selectedCourse].text;
                var userRating = rating.value;
                alert("Thank you for your feedback!\nYour rating for course " + courseName + " is " + userRating);
            }

            var form = document.querySelector('.form');
            form.addEventListener('submit', handleSubmit);
        });