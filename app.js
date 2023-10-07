document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('student-form');
    const tableBody = document.querySelector('#table-section tbody');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        
        const fullName = document.getElementById('full-name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const phone = document.getElementById('phone').value;
        const grade = document.getElementById('grade').value;

     
        const newRow = tableBody.insertRow();

       
        const fullNameCell = newRow.insertCell(0);
        const dobCell = newRow.insertCell(1);
        const genderCell = newRow.insertCell(2);
        const phoneCell = newRow.insertCell(3);
        const gradeCell = newRow.insertCell(4);

   
        fullNameCell.textContent = fullName;
        dobCell.textContent = dob;
        genderCell.textContent = gender;
        phoneCell.textContent = phone;
        gradeCell.textContent = grade;


        form.reset();
    });
});
