// script.js
document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const year = document.getElementById('year').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;

    // Generate resume HTML
    const resumeHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Institution:</strong> ${institution}</p>
        <p><strong>Graduation Year:</strong> ${year}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Experience</h3>
        <p>${experience}</p>
    `;

    // Display the generated resume
    document.getElementById('resume-output').innerHTML = resumeHTML;
});
