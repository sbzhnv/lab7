function modification(){
    heading = document.getElementById("H1");
    heading.innerHTML = "Lab7 Assignment";
    heading.style.color = "blue"
    document.body.appendChild(heading);

    hr = document.createElement("hr")
    hr.style.borderColor = "black"
    document.body.appendChild(hr);

    h2 = document.createElement("h2")
    h2.innerHTML = "Task";
    h2.style.color = "red"
    document.body.appendChild(h2);

    p1 = document.createElement("p")
    p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
    document.body.appendChild(p1);

    var ul_1 = document.createElement('ul');

    var li1_1 = document.createElement('li');
    li1_1.innerHTML = 'find elements in the DOM <b>(5 points)</b>;';
    var li1_2 = document.createElement('li');
    li1_2.innerHTML = 'create/add/remove elements <b>(5 points)</b>;';
    var li1_3 = document.createElement('li');
    li1_3.innerHTML = 'change content of the elements <b>(5 points)</b>;';
    var li1_4 = document.createElement('li');
    li1_4.innerHTML = 'change styles of the elements <b>(5 points)</b>;';
    var li1_5 = document.createElement('li');
    li1_5.innerHTML = 'change attributes of the elements <b>(5 points)</b>;';
    var li1_6 = document.createElement('li');
    li1_6.innerHTML = 'change classes of the elements <b>(5 points)</b>;';

    ul_1.appendChild(li1_1);
    ul_1.appendChild(li1_2);
    ul_1.appendChild(li1_3);
    ul_1.appendChild(li1_4);
    ul_1.appendChild(li1_5);
    ul_1.appendChild(li1_6);
    document.body.appendChild(ul_1);

    var liElements_1 = document.querySelectorAll('ul li');
    for (var i = 0; i < liElements_1.length; i++) {
        if (i % 2 === 0) {
            liElements_1[i].classList.add('even');
        }
        else{
            liElements_1[i].classList.add('odd');
        }
    }
    
    var evenItems = document.querySelectorAll('li.even');
    for (var i = 0; i < evenItems.length; i++) {
        evenItems[i].style.color = 'green';
    }

    var oddItems = document.querySelectorAll('li.odd');
    for (var i = 0; i < oddItems.length; i++) {
        oddItems[i].style.color = 'purple';
    }

    hr = document.createElement("hr")
    hr.style.borderColor = "black"
    document.body.appendChild(hr);

    h2_1 = document.createElement("h2")
    h2_1.innerHTML = "Submission";
    h2_1.style.color = "red"
    document.body.appendChild(h2_1);

    p2 = document.createElement("p")
    p2.innerHTML = "To submit your work, follow these instructions:";
    document.body.appendChild(p2);


    var ul = document.createElement('ul');
    var li1 = document.createElement('li');
    li1.innerHTML = 'Create a new repository on Github, named lab7 <b>(1 point)</b>.';
    var li2 = document.createElement('li');
    li2.innerHTML = 'Clone this repository to your local machine and work inside it.';
    var li3 = document.createElement('li');
    li3.innerHTML = 'Create a new HTML file, called index.html, which has only one tag with Hello, World! message <b>(1 point)</b>.';
    var li4 = document.createElement('li');
    li4.innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above <b>(1 point)</b>.';
    var li5 = document.createElement('li');
    li5.innerHTML = 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the body section).';
    var li6 = document.createElement('li');
    li6.innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file <b>(5 points)</b>.';
    var li7 = document.createElement('li');
    li7.innerHTML = 'After you finish your work, submit it to the Github <b>(2 points)</b>.';

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);
    document.body.appendChild(ul);

    var liElements = document.querySelectorAll('ul li');
    for (var i = 0; i < liElements.length; i++) {
        if (i % 2 === 0) {
             liElements[i].style.color = 'green';
        }
        else{
            liElements[i].style.color = 'purple';
        }
    }

    hr = document.createElement("hr")
    hr.style.borderColor = "black";
    document.body.appendChild(hr);

    var removed = document.createElement('a');
    removed.innerHTML = "This paragraph will be removed after pressing the button <br>"
    removed.setAttribute("href", "https://github.com/sbzhnv/lab7")
    document.body.appendChild(removed);

    var newButton = document.createElement('button');
    newButton.innerText = 'Remove the text';
    newButton.addEventListener('click', function() {
        removed.remove();
    });
    document.body.appendChild(newButton);

}