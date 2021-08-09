var button_skills = document.getElementById('skills');
var button_projects = document.getElementById('projects');
var button_contact = document.getElementById('contact');

var changing_content = document.getElementById('changing-content');
var mob_skills = document.getElementById('mob-skills');
var mob_projects = document.getElementById('mob-projects');
var mob_contact = document.getElementById('mob-contact');
//     console.log(changing_content);
// console.log(changing_content.innerHTML);


//web version for skills button starts here
button_skills.addEventListener('click', function () {

    changing_content.innerHTML = `<div class="info">
    <h2>SKILLS</h2>
    <ul>
        <li>Intermediate level knowledge of HTML, CSS</li>
        <li>Beginner level knowledge of Java and JavaScript</li>
        <li>Intermediate level knowledge of Bootstrap 5</li>
        <li>Beginner level knowledge of React.js</li>
        <li>Currently working on Backend frameworks like Node.js, Express, MongoDB and Mongoose</li>
    </ul>
    </div>  `;
    // console.log(changing_content.innerHTML);
});
//web version for skills button ends here

//mob version for skills button starts here

button_skills.addEventListener('click', function () {

    mob_skills.innerHTML = `<div class="info">
    <h2>SKILLS</h2>
    <ul>
    <li>Intermediate level knowledge of HTML, CSS</li>
    <li>Beginner level knowledge of Java and JavaScript</li>
    <li>Intermediate level knowledge of Bootstrap 5</li>
    <li>Beginner level knowledge of React.js</li>
    <li>Currently working on Backend frameworks like Node.js, Express, MongoDB and Mongoose</li>
    </ul>
    </div>  `;
    // console.log(changing_content.innerHTML);
});
//mob version for skills button ends here


button_projects.addEventListener('click', function () {

    changing_content.innerHTML = `<div class="info top">
    <h2><a href="">Expense Tracker (using React)</a></h2>
    <ul>
        <li>Simple expense tracker react application.</li>
    </ul>
    <h2><a href="https://vd02.github.io/speech-transitioner/">Optical Character Recognition</a></h2>
    <ul>
        <li>Optical Character Recognition (OCR) tool that reads custom written input with the help of Google and Microsoft enabled voice systems with modifiable pitch and voice rate.</li>
    </ul>
    <h2><a href="https://vd02.github.io/Snake-Game/index.html">Snake Game</a></h2>
    <ul>
        <li>JavaScript based animated snake game.</li>
    </ul>
    <h2><a href="https://vd02.github.io/Responsive-Blog-Template/">Resposive Blog Template</a></h2>
    <ul>
        <li>HTML and CSS based responsive blog template.</li>
    </ul>
    <div class="more-projects">
    <h3>More projects Coming Soon!</h3>
    </div>
    </div>  `;
    // console.log(changing_content.innerHTML);
});

button_projects.addEventListener('click', function () {

    mob_projects.innerHTML = `<div class="info top">
    <h2><a href="https://vd02.github.io/Responsive-Blog-Template/">Expense Tracker (using React)</a></h2>
    <ul>
        <li>Simple expense tracker react application.</li>
    </ul>
    <h2><a href="https://vd02.github.io/Responsive-Blog-Template/">Optical Character Recognition</a></h2>
    <ul>
        <li>Optical Character Recognition (OCR) tool that reads custom written input with the help of Google and Microsoft enabled voice systems with modifiable pitch and voice rate.</li>
    </ul>
    <h2><a href="https://vd02.github.io/Snake-Game/index.html">Snake Game</a></h2>
    <ul>
        <li>JavaScript based animated snake game.</li>
    </ul>
    <h2><a href="https://vd02.github.io/Responsive-Blog-Template/">Resposive Blog Template</a></h2>
    <ul>
        <li>HTML and CSS based responsive blog template.</li>
    </ul>
    <div class="more-projects">
    <h3>More projects Coming Soon!</h3>
    </div>
    </div>  `;
    // console.log(changing_content.innerHTML);
});


button_contact.addEventListener('click', function () {

    changing_content.innerHTML = `<div class="avatar">
    <a href="https://github.com/vd02">
    <img src="https://img.icons8.com/ios-filled/150/4a90e2/github.png" alt="Github" />
		</a>
        </div>
        <div class="avatar">
        <a href="https://www.linkedin.com/in/varun-dixit-997b93201/">
        <img src="https://img.icons8.com/fluent/144/000000/linkedin-circled.png" alt="Linkedin" />
		</a>
         </div>
         <div class="avatar">
        <a href="mailto:dixitvarun0208@gmail.com">
        <img src="https://img.icons8.com/fluent/128/000000/apple-mail.png" alt="Email" />
		</a>
         </div>`;



    // console.log(changing_content.innerHTML);
});

button_contact.addEventListener('click', function () {

    mob_contact.innerHTML = `<div class="avator-set">
    <div class="avatar">
    <a href="https://github.com/vd02">
    <img src="https://img.icons8.com/ios-filled/150/4a90e2/github.png" alt="Github" />
		</a>
        </div>
        <div class="avatar">
        <a href="https://www.linkedin.com/in/varun-dixit-997b93201/">
        <img src="https://img.icons8.com/fluent/144/000000/linkedin-circled.png" alt="Linkedin" />
		</a>
         </div>
         <div class="avatar">
        <a href="mailto:dixitvarun0208@gmail.com">
        <img src="https://img.icons8.com/fluent/128/000000/apple-mail.png" alt="Email" />
		</a>
         </div>
         </div>`;



    // console.log(changing_content.innerHTML);
});


