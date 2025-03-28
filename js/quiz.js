// css part
let menu1 = document.querySelector('.quiz-menu');
let menu2 = document.querySelector('.review-menu');
let shut1 = document.querySelector('.answer-close');
let shut2 = document.querySelector('.answer-close-r');
let side1 = document.querySelector('.answer-box');
let side2 = document.querySelector('.answer-box-r');
let over1 = document.querySelector('.overlayQ');
let over2 = document.querySelector('.overlayR');

// quiz box part
menu1.addEventListener('click', function () {
    side1.classList.add('active');
    over1.classList.add('active');
});

shut1.addEventListener('click', function () {
    side1.classList.remove('active');
    over1.classList.remove('active');
});

// review box part
menu2.addEventListener('click', function () {
    side2.classList.add('active');
    over2.classList.add('active');
    quesN.classList.add('inactive');
});

shut2.addEventListener('click', function () {
    side2.classList.remove('active');
    over2.classList.remove('active');
    quesN.classList.remove('inactive');
});

// color set
let pri = quiz.colors[0];
let sec = quiz.colors[1];
let ter = quiz.colors[2];

document.documentElement.style.setProperty('--bg-P', `${pri}`);
document.documentElement.style.setProperty('--bg-S', `${sec}`);
document.documentElement.style.setProperty('--bg-T', `${ter}`);

//  javascript part
//  start box html part select
let chapter = document.querySelector('.chapter');
let topics = document.querySelector('.topics');

chapter.innerText = `${quiz.chapter}`;
for (let i = 0; i < quiz.topics.length; i++) {
    topics.innerHTML += `<span>${quiz.topics[i]}</span>`;
}

// quiz box html part select
let title = document.querySelector('.quiz-title');
let numb = document.querySelector('.question-number');
let time = document.querySelector('.quiz-timer');

let text = document.querySelector('.question-text');
let state = document.querySelector('.question-statement');
let image = document.querySelector('.question-img');
let table = document.querySelector('.question-table');
let tbody = document.querySelector('.tbody');

let opts = document.querySelector('.question-option');
let list = document.querySelector('.answer-indicator');

// Review Box Selected
let titleR = document.querySelector('.review-title');
let numbR = document.querySelector('.question-number-r');
let timeR = document.querySelector('.quiz-timer-r');

let textR = document.querySelector('.question-text-r');
let stateR = document.querySelector('.question-statement-r');
let imageR = document.querySelector('.question-img-r');
let tableR = document.querySelector('.question-table-r');
let tbodyR = document.querySelector('.tbody-r');

let optsR = document.querySelector('.question-option-r');
let quesN = document.querySelector('.question-notation');
let SolQ = document.querySelector('.question-solution');
let listR = document.querySelector('.answer-indicator-r');

// All Box Selected
let S_Box = document.querySelector('.start-box');
let Q_Box = document.querySelector('.quiz-box');

let R_Box = document.querySelector('.result-box');
let R_Body = document.querySelector('.result-body');

let C_Box = document.querySelector('.review-box');

// quiz question select
let quizTitle;

let currentQues;
let currentState;
let currentPics;
let currentTabs;
let currentOpts;
let currentSolve;

let picture;
let left;
let right;

let currentAns;
let actualAns;
let usersAns;

let counter = 0;
let count = 0;
let rightAns = 0;
let wrongAns = 0;

// alphabet list array
let numL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let numR = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let alpha = ['A', 'B', 'C', 'D'];

let R;
let W;
let M;
let U;

// timer variable
let st = new Date(new Date().setTime(0));
let nt = st.getTime();
let seconds = Math.floor((nt % (100 * 60)) / 1000);
let minutes = Math.floor((nt % (1000 * 60 * 60)) / 1000);
let timer;

function setQuestion() {
    // set quiz title
    questionTitle = `${quiz.title}`;
    title.innerText = questionTitle;

    // set question number
    numb.innerHTML = `Q. ${counter + 1}`;
    if (counter < 9) {
        numb.innerHTML = `Q. 0${counter + 1}`;
    }

    // set question body

    // set question text
    currentQues = quiz.questions[counter];
    text.innerHTML = currentQues.question;

    // set question img
    currentPics = currentQues.picture;

    // set question table
    currentTabs = currentQues.table;

    // set question statement
    currentState = currentQues.statement;

    // only Question
    if (
        currentPics == undefined &&
        currentTabs == undefined &&
        currentState == undefined
    ) {
        image.style.display = 'none';
        table.style.display = 'none';
        state.style.display = 'none';
    }
    // only Image
    else if (currentTabs == undefined && currentState == undefined) {
        image.style.display = 'block';
        table.style.display = 'none';
        state.style.display = 'none';

        image.innerHTML = '';
        picture = new Image();
        picture.setAttribute('src', currentPics);
        image.appendChild(picture);
    }
    // only Statement
    else if (currentTabs == undefined && currentPics == undefined) {
        state.style.display = 'block';
        image.style.display = 'none';
        table.style.display = 'none';

        state.innerHTML = '';
        for (let i = 0; i < currentState.length; i++) {
            let srt = document.createElement('p');
            srt.innerHTML = `${numR[i]}. ${currentState[i]}`;
            state.appendChild(srt);
        }
    }
    // only Table
    else {
        table.style.display = 'block';
        image.style.display = 'none';
        state.style.display = 'none';

        tabL = currentTabs.left;
        tabR = currentTabs.right;

        tbody.innerHTML = '';
        for (let i = 0; i < tabR.length; i++) {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td> ${numL[i]} </td>
                <td> ${tabL[i]} </td>
                <td> ${numR[i]} </td>
                <td> ${tabR[i]} </td>
            `;
            tbody.appendChild(tr);
        }

        let B = tbody.lastChild.children[0].innerText;

        if (tabL[4] == undefined && B == 'E') {
            tbody.lastChild.children[0].innerHTML = '';
            tbody.lastChild.children[1].innerHTML = '';
        }

        if (tabL[5] == undefined && B == 'F') {
            tbody.lastChild.children[0].innerHTML = '';
            tbody.lastChild.children[1].innerHTML = '';
        }

        if (tabL[6] == undefined && B == 'G') {
            tbody.lastChild.children[0].innerHTML = '';
            tbody.lastChild.children[1].innerHTML = '';
        }

        if (tabL[7] == undefined && B == 'H') {
            tbody.lastChild.children[0].innerHTML = '';
            tbody.lastChild.children[1].innerHTML = '';
        }
    }

    // set question option
    currentOpts = currentQues.options;
    opts.innerHTML = '';
    let animationDelay = 0.2;
    for (let i = 0; i < currentOpts.length; i++) {
        let option = document.createElement('div');
        option.innerHTML = `
            <div class="option-alpha"> ${alpha[i]} </div> 
            <div class="option-text"> ${currentOpts[i]} <div> 
        `;
        option.id = i + 1;
        option.style.animationDelay = animationDelay + 's';
        animationDelay += 0.2;
        option.className = 'option';
        option.setAttribute('onclick', 'getOption(this)');
        opts.appendChild(option);
    }
}

function getOption(num) {
    currentAns = parseInt(num.id);
    actualAns = quiz.questions[counter].answer;

    optsLength = opts.children.length;

    if (currentAns == actualAns) {
        // right option
        num.classList.add('right');
        num.firstElementChild.classList.add('right');
        list.children[counter].classList.add('right');

        rightAns++;
    } else {
        // wrong option
        num.classList.add('wrong');
        num.firstElementChild.classList.add('wrong');
        list.children[counter].classList.add('wrong');

        opts.children[actualAns - 1].firstElementChild.classList.add('right');
        opts.children[actualAns - 1].classList.add('right');

        wrongAns++;
    }

    // set others option unClickable
    for (let i = 0; i < optsLength; i++) {
        opts.children[i].classList.add('answered');
    }

    // store current ans in quiz array
    quiz.questions[counter].userAns = '';
    for (let i = 0; i < quiz.questions.length; i++) {
        quiz.questions[counter].userAns = currentAns;
    }
}

function setQuesList() {
    // set question list
    list.innerHTML = '';
    for (let i = 0; i < quiz.questions.length; i++) {
        let qNum = document.createElement('div');
        qNum.innerText = i + 1;
        qNum.setAttribute('onclick', 'getQuesNum(this)');
        list.appendChild(qNum);
    }
}

function getQuesNum(e) {
    // css part
    side1.classList.remove('active');
    over1.classList.remove('active');

    setTimeout(function () {
        // get question number from question list
        let queNum = parseInt(e.innerText);
        counter = queNum - 1;

        setQuestion();

        preview();
    }, 400);
}

function preview() {
    userAns = quiz.questions[counter].userAns;
    actualAns = quiz.questions[counter].answer;

    optsLength = opts.children.length;

    if (userAns == undefined) {
        setQuestion();
    } else {
        if (userAns === actualAns) {
            opts.children[actualAns - 1].firstElementChild.classList.add(
                'right'
            );
            opts.children[actualAns - 1].classList.add('right');
        } else {
            opts.children[actualAns - 1].firstElementChild.classList.add(
                'right'
            );
            opts.children[actualAns - 1].classList.add('right');

            opts.children[userAns - 1].firstElementChild.classList.add('wrong');
            opts.children[userAns - 1].classList.add('wrong');
        }

        // set others option unClickable
        for (let i = 0; i < optsLength; i++) {
            opts.children[i].classList.add('answered');
        }
    }
}

function setTimer() {
    if (seconds < 59) {
        seconds++;
    } else {
        minutes++;
        seconds = 0;
    }

    let sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let min = minutes < 10 ? `0${minutes}` : `${minutes}`;

    time.innerHTML = `${min} : ${sec}`;
}

// prev question
let prev = document.querySelector('.prev');
prev.addEventListener('click', function () {
    if (counter === 0) {
        prev.disable = 'true';
    } else {
        counter--;
        setQuestion();
    }
    preview();
});

// next question
let next = document.querySelector('.next');
next.addEventListener('click', function () {
    if (counter === quiz.questions.length - 1) {
        prev.disable = 'true';
    } else {
        counter++;
        setQuestion();
    }
    preview();
});

// submit quiz
let submit = document.querySelector('.submit');
submit.addEventListener('click', function () {
    quizResult();

    clearInterval(timer);

    side1.classList.remove('active');
    over1.classList.remove('active');
    side1.classList.add('inactive');
    over1.classList.add('inactive');

    Q_Box.classList.remove('active');
    R_Box.classList.add('active');
});

// quiz result
function quizResult() {
    let attempt = rightAns + wrongAns;
    let score = rightAns * 4 - wrongAns + ' / ' + quiz.questions.length * 4;
    let percent = ((rightAns / quiz.questions.length) * 100).toFixed(2) + '%';

    let timeTaken = `${minutes} min & ${seconds} sec`;
    if (minutes < 1) {
        timeTaken = `${seconds} sec`;
    }

    //  create table
    R_Body.innerHTML = '';
    let R_Tab = document.createElement('table');
    R_Tab.innerHTML = `
            <tr>
                <td>Total Questions</td>
                <td>${quiz.questions.length}</td>
            </tr>
            <tr>
                <td>Total Attempt</td>
                <td>${attempt}</td>
            </tr>
            <tr>
                <td>Total Correct</td>
                <td>${rightAns}</td>
            </tr>
            <tr>
                <td>Total Wrong</td>
                <td>${wrongAns}</td>
            </tr>
            <tr>
                <td>Total Time Taken</td>
                <td>${timeTaken}</td>
            </tr>
            <tr>
                <td>Total Percentage</td>
                <td>${percent}</td>
            </tr>
            <tr>
                <td>Total Score</td>
                <td>${score}</td>
            </tr>
        `;
    R_Body.appendChild(R_Tab);
}

let review = document.querySelector('.review');
review.addEventListener('click', function () {
    setReviewQuestion();
    setReviewQuesList();

    clearInterval(timer);

    R_Box.classList.remove('active');
    C_Box.classList.add('active');
});

function setReviewQuestion() {
    // set the time
    let timeTaken = `${minutes} : ${seconds}`;
    if (minutes < 1) {
        timeTaken = `00 : ${seconds}`;
    }
    if (seconds < 10) {
        timeTaken = `00 : 0${seconds}`;
    }

    timeR.innerHTML = timeTaken;

    // set quiz title
    questionTitle = `${quiz.title}`;
    titleR.innerText = questionTitle;

    // set question number
    numbR.innerHTML = `Q. ${count + 1}`;
    if (count < 9) {
        numbR.innerHTML = `Q. 0${count + 1}`;
    }

    // set question body

    // set question text
    currentQues = quiz.questions[count];
    // currentQues = quiz.questions[6];
    textR.innerHTML = currentQues.question;

    // set question img
    currentPics = currentQues.picture;

    // set question table
    currentTabs = currentQues.table;

    // set question statement
    currentState = currentQues.statement;

    // only Question
    if (
        currentPics == undefined &&
        currentTabs == undefined &&
        currentState == undefined
    ) {
        imageR.style.display = 'none';
        tableR.style.display = 'none';
        stateR.style.display = 'none';
    }
    // only Image
    else if (currentTabs == undefined && currentState == undefined) {
        imageR.style.display = 'block';
        tableR.style.display = 'none';
        stateR.style.display = 'none';

        imageR.innerHTML = '';
        picture = new Image();
        picture.setAttribute('src', currentPics);
        imageR.appendChild(picture);
    }
    // only Statement
    else if (currentTabs == undefined && currentPics == undefined) {
        stateR.style.display = 'block';
        imageR.style.display = 'none';
        tableR.style.display = 'none';

        stateR.innerHTML = '';
        for (let i = 0; i < currentState.length; i++) {
            let srt = document.createElement('p');
            srt.innerHTML = `${numR[i]}. ${currentState[i]}`;
            stateR.appendChild(srt);
        }
    }
    // only Table
    else {
        tableR.style.display = 'block';
        imageR.style.display = 'none';
        stateR.style.display = 'none';

        tabL = currentTabs.left;
        tabR = currentTabs.right;

        tbodyR.innerHTML = '';
        for (let i = 0; i < tabR.length; i++) {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td> ${numL[i]} </td>
                <td> ${tabL[i]} </td>
                <td> ${numR[i]} </td>
                <td> ${tabR[i]} </td>
            `;
            tbodyR.appendChild(tr);
        }

        let B = tbodyR.lastChild.children[0].innerText;

        if (tabL[4] == undefined && B == 'E') {
            tbodyR.lastChild.children[0].innerHTML = '';
            tbodyR.lastChild.children[1].innerHTML = '';
        }

        if (tabL[5] == undefined && B == 'F') {
            tbodyR.lastChild.children[0].innerHTML = '';
            tbodyR.lastChild.children[1].innerHTML = '';
        }

        if (tabL[6] == undefined && B == 'G') {
            tbodyR.lastChild.children[0].innerHTML = '';
            tbodyR.lastChild.children[1].innerHTML = '';
        }

        if (tabL[7] == undefined && B == 'H') {
            tbodyR.lastChild.children[0].innerHTML = '';
            tbodyR.lastChild.children[1].innerHTML = '';
        }
    }

    // set question option
    currentOpts = currentQues.options;
    optsR.innerHTML = '';
    for (let i = 0; i < currentOpts.length; i++) {
        let option = document.createElement('div');
        option.innerHTML = `
            <div class="option-alpha-r"> ${alpha[i]} </div> 
            <div class="option-text-r"> ${currentOpts[i]} <div> 
        `;
        option.className = 'option-r';
        optsR.appendChild(option);
    }

    // Option Color Set
    currentAns = quiz.questions[count].userAns;
    actualAns = quiz.questions[count].answer;

    // Set Right Ans
    optsR.childNodes[actualAns - 1].classList.add('right');
    optsR.childNodes[actualAns - 1].firstElementChild.classList.add('right');

    quesN.innerHTML = '';
    if (currentAns == actualAns) {
        quesN.classList.add('correct');
        quesN.classList.remove('incorrect');
        quesN.classList.remove('unmarked');

        quesN.innerHTML = `Correct <span>&#10004;</span>`;
    } else if (currentAns == undefined) {
        quesN.classList.add('unmarked');
        quesN.classList.remove('correct');
        quesN.classList.remove('incorrect');

        quesN.innerHTML = `Unmarked <span>&#10031;</span>`;
    } else {
        optsR.childNodes[currentAns - 1].classList.add('wrong');
        optsR.childNodes[currentAns - 1].firstElementChild.classList.add(
            'wrong'
        );

        quesN.classList.add('incorrect');
        quesN.classList.remove('unmarked');
        quesN.classList.remove('correct');

        quesN.innerHTML = `Incorrect <span>&#10008;</span>`;
    }

    // set question solution
    currentSolve = currentQues.solution;
    SolQ.innerHTML = '';
    let solution = document.createElement('div');
    solution.innerHTML = `${currentSolve}`;
    solution.className = 'solution';
    SolQ.appendChild(solution);
}

function setReviewQuesList() {
    // set question list
    listR.innerHTML = '';
    for (let i = 0; i < quiz.questions.length; i++) {
        let qNum = document.createElement('div');
        qNum.innerText = i + 1;
        qNum.setAttribute('onclick', 'getReviewQuesNum(this)');
        listR.appendChild(qNum);
    }

    for (let i = 0; i < quiz.questions.length; i++) {
        let rAns = quiz.questions[i].answer;
        let uAns = quiz.questions[i].userAns;

        if (uAns == rAns) {
            listR.children[i].classList.add('right');
        } else if (uAns == undefined) {
        } else {
            listR.children[i].classList.add('wrong');
        }
    }
}

function getReviewQuesNum(e) {
    // css part
    side2.classList.remove('active');
    over2.classList.remove('active');

    setTimeout(function () {
        // get question number from question list
        let queNum = parseInt(e.innerText);
        count = queNum - 1;

        setReviewQuestion();
    }, 400);
}

// prev question
let prevR = document.querySelector('.prevR');
prevR.addEventListener('click', function () {
    if (count === 0) {
        prevR.disable = 'true';
    } else {
        count--;
        setReviewQuestion();
    }
});

// next question
let nextR = document.querySelector('.nextR');
nextR.addEventListener('click', function () {
    if (count === quiz.questions.length - 1) {
        prevR.disable = 'true';
    } else {
        count++;
        setReviewQuestion();
    }
});

// start quiz
let start = document.querySelector('.start');
start.addEventListener('click', function () {
    setQuestion();
    setQuesList();
    setTimer();

    timer = setInterval(setTimer, 1000);

    S_Box.classList.add('inactive');
    Q_Box.classList.add('active');
});

let again = document.querySelector('.again');
again.addEventListener('click', setAgain);

function setAgain() {
    C_Box.classList.remove('active');
    R_Box.classList.remove('active');
    Q_Box.classList.add('active');

    counter = 0;
    count = 0;
    rightAns = 0;
    wrongAns = 0;

    for (let i = 0; i < quiz.length; i++) {
        delete quiz[i].userAns;
    }

    st = new Date(new Date().setTime(0));
    nt = st.getTime();
    seconds = Math.floor((nt % (100 * 60)) / 1000);
    minutes = Math.floor((nt % (1000 * 60 * 60)) / 1000);

    timer = setInterval(setTimer, 1000);

    setQuestion();
    setQuesList();
    setTimer();
}
