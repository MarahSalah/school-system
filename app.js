document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('student-form');
    const tableBody = document.querySelector('#table-section tbody');
    const students = [];


    function Student(fullName, dob, gender, major, imageUrl, phone, grade) {
        this.fullName = fullName;
        this.dob = dob;
        this.gender = gender;
        this.major = major;
        this.imageUrl = imageUrl;
        this.phone = phone;
        this.grade = grade;
    }

 
    if (localStorage.getItem('students')) {
        const storedStudents = JSON.parse(localStorage.getItem('students'));
        students.push(...storedStudents);
        displayStudents();
    }

    function displayStudents() {
        tableBody.innerHTML = '';
        students.forEach((student) => {
            const newRow = tableBody.insertRow();
            newRow.innerHTML = `
                <td>${student.fullName}</td>
                <td>${student.dob}</td>
                <td>${student.gender}</td>
                <td>${student.major}</td>
                <td><img src="${student.imageUrl}" alt="${student.fullName}" width="100"></td>
                <td>${student.phone}</td>
                <td>${student.grade}</td>
            `;
        });
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

  
        const fullName = document.getElementById('full-name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const major = document.getElementById('major').value;
        const imageUrl = document.getElementById('image-url').value; 
        const phone = document.getElementById('phone').value;
        const grade = document.getElementById('grade').value;

       
        const student = new Student(fullName, dob, gender, major, imageUrl, phone, grade);


        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));

        
        displayStudents();

        form.reset();
    });
});
