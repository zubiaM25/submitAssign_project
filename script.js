document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('name').value;
    const semester = document.getElementById('semester').value;

    const subjects = getSubjectsForSemester(semester);

    document.getElementById('subject-list').innerHTML = subjects.map(subject => `<li>${subject}</li>`).join('');
});

document.getElementById('assignment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('assignment-file');
    const file = fileInput.files[0];
    
    if (file) {
        alert(`Assignment for ${document.getElementById('name').value} submitted: ${file.name}`);
    } else {
        alert("Please select a file to upload.");
    }
});

function getSubjectsForSemester(semester) {
    const semesterSubjects = {
        "1": ["Programming for Problem Solving", "Chemistry", "Engineering Workshop"],
        "2": ["Physics", "Basic Electrical Engineering"],
        "3": ["OOP using Java", "Basic Electronics", "Data Structures and Algorithm"],
        "4": ["Computer Organization", "Database and Management System"],
        "5": ["Computer Networks", "Artificial Intelligence", "Software Engineering"]
    };

    return semesterSubjects[semester] || [];
}
