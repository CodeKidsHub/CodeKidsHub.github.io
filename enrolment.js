function validateForm() {
    console.log('validateForm function');

    let selectedKid = document.forms["myForm"]["kidName"].value;
    console.log('Selected Kid:', selectedKid);

    let selectedCourses = document.querySelectorAll('input[name="selectedCourses"]:checked');
    console.log('Selected Courses:', selectedCourses);

    if (selectedKid === 'Choose your kid') {
        alert('Please choose your kid');
        return false;
    }

    if (selectedCourses.length === 0) {
        alert('Please select at least one course');
        return false;
    }

    // Update enrollment information section
    const enrollmentInfoSection = document.getElementById('enrollmentInfo');
    enrollmentInfoSection.style.display = 'block';

    enrollmentInfoSection.innerHTML = '';

    // Display child name
    const childNameParagraph = document.createElement('p');
    childNameParagraph.textContent = 'Kid Name: ' + selectedKid;
    enrollmentInfoSection.appendChild(childNameParagraph);

    // Display selected courses and tutors
    const selectedCoursesParagraph = document.createElement('p');
    selectedCoursesParagraph.textContent = 'Enrolled Course/s: ';

    const tutorsSet = new Set();

    Array.from(selectedCourses, course => {
        const tutorName = getTutorForCourses([course.value]);

       
        selectedCoursesParagraph.textContent += course.value + ', ';

        // Add tutor name to the set
        tutorsSet.add(tutorName);
    });

    
    selectedCoursesParagraph.textContent = selectedCoursesParagraph.textContent.slice(0, -2);

    // Display unique tutor names
    const tutorsParagraph = document.createElement('p');
    tutorsParagraph.textContent = 'Tutor/s: ' + Array.from(tutorsSet).join(', ');

    enrollmentInfoSection.appendChild(selectedCoursesParagraph);
    enrollmentInfoSection.appendChild(tutorsParagraph);

    // valid
	document.getElementById("myForm").reset();
    return true;
}


function getTutorForCourses(selectedCourses) {
    
    const tutorsByCourse = {
        'Introduction to coding': 'Ghada Al-Otaibi',
        'Scratch': 'Ghada Al-Otaibi',
        'Python': 'Maha Khalid',
        'Java': 'Nada Al-Qahtani',
        'Snap!': 'Hind Al-Rubaia',
        'JavaScript': 'Hind Al-Rubaia',
        'C++': 'Nada Al-Qahtani',
        'C# for Beginners': 'Nada Al-Qahtani',
        'undamentals of SQL': 'Maha Khalid'
    };

    
    const uniqueTutors = Array.from(new Set(selectedCourses.map(course => tutorsByCourse[course])));

    return uniqueTutors.join(', ');
}