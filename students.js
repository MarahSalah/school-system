document.addEventListener('DOMContentLoaded', function () {
    const studentCards = document.getElementById('student-cards');

 
    const students = JSON.parse(localStorage.getItem('students')) || [];

   
    students.forEach((student) => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-4', 'border', 'border-primary'); 

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-center');

        const img = document.createElement('img');
        img.classList.add('card-img-top', 'mb-3');
        img.src = student.imageUrl;
        img.alt = student.fullName;

        const h5 = document.createElement('h5');
        h5.classList.add('card-title');
        h5.textContent = student.fullName;

        const p1 = document.createElement('p');
        p1.classList.add('card-text');
        p1.textContent = `Date of Birth: ${student.dob}`;

        const p2 = document.createElement('p');
        p2.classList.add('card-text');
        p2.textContent = `Gender: ${student.gender}`;

        const p3 = document.createElement('p');
        p3.classList.add('card-text');
        p3.textContent = `Major: ${student.major}`;

        const p4 = document.createElement('p');
        p4.classList.add('card-text');
        p4.textContent = `Phone Number: ${student.phone}`;

        const p5 = document.createElement('p');
        p5.classList.add('card-text');
        p5.textContent = `Grade: ${student.grade}`;

        cardBody.appendChild(img);
        cardBody.appendChild(h5);
        cardBody.appendChild(p1);
        cardBody.appendChild(p2);
        cardBody.appendChild(p3);
        cardBody.appendChild(p4);
        cardBody.appendChild(p5);

        card.appendChild(cardBody);

        studentCards.appendChild(card);
    });
});
