function mySolution(){

    const $elements = {
        askQuestionTextArea: document.querySelector("#inputSection textarea"),
        usernameInputFiels: document.querySelector('#inputSection div input[type="username"]'),
        askQuestionBtn: document.querySelector('#inputSection div button'),
        pendingQestionsDiv: document.querySelector('#pendingQuestions'),
        openQestionsDiv: document.querySelector('#openQuestions')
    }

    $elements.askQuestionBtn.addEventListener("click", askQuestion);

    function askQuestion() {
        const question = $elements.askQuestionTextArea.value;
        const givenUsername = $elements.usernameInputFiels.value;
        const username = givenUsername !== "" ? givenUsername : 'Anonymous';

        let pendingQestionDiv = createHTMLElemnt('div','pendingQuestion');
        let usernameImage = createHTMLElemnt(
            'img', 
            null, null, 
            [{k: 'src', v: "./images/user.png"},{k: 'width', v: "32"},{k: 'height', v: "32"}]
        );
        let usernameSpan = createHTMLElemnt('span', null, username);
        let questionP = createHTMLElemnt('p', null, question);
        let actionsDiv = createHTMLElemnt('div', 'actions');
        let archiveBtn = createHTMLElemnt('button', 'archive', 'Archive', null, {type: 'click', func: archiveQuestion});
        let openBtn = createHTMLElemnt('button', 'open', 'Open', null, {type: 'click', func: openQuestion});

        actionsDiv = appendChildrenToParent([archiveBtn, openBtn], actionsDiv);
        pendingQestionDiv = appendChildrenToParent([usernameImage, usernameSpan, questionP, actionsDiv], pendingQestionDiv);
        $elements.pendingQestionsDiv.appendChild(pendingQestionDiv);
    }

    function archiveQuestion() {
        const questionDiv = this.parentNode.parentNode
        questionDiv.remove();
    }

    function openQuestion() {
        const questionDiv = this.parentNode.parentNode;

        questionDiv.className = 'openQuestion';
        let actionsDiv = questionDiv.querySelector('div.actions');
        actionsDiv.innerHTML = '';
        const replyBtn = createHTMLElemnt('button', 'reply', 'Reply', null, {type: 'click', func: replyToQuestion});
        actionsDiv = appendChildrenToParent([replyBtn], actionsDiv);

        let replySectionDiv = createHTMLElemnt('div', 'replySection', null, [{k: 'style', v: 'display: none;'}]);
        let replyInput = createHTMLElemnt('input', 'replyInput', null, [{k: 'type', v: 'text'},{k: 'placeholder', v: 'Reply to this question hire...'}]);
        let sendAnswerBtn = createHTMLElemnt('button', 'replyButton', 'Send', null, {type: 'click', func: addAnswer});
        let answersOl = createHTMLElemnt('ol', 'reply', null, [{k: 'type', v:'1'}]);

        replySectionDiv = appendChildrenToParent([replyInput, sendAnswerBtn, answersOl], replySectionDiv);

        questionDiv.appendChild(replySectionDiv);
        $elements.openQestionsDiv.appendChild(questionDiv);
    }

    function addAnswer() {
        const parent = this.parentNode;
        const answerInput = parent.querySelector('input').value;
        parent.querySelector('input').value = '';

        const answerLi = createHTMLElemnt('li', null, answerInput);
        parent.querySelector('ol').appendChild(answerLi);
    }

    function replyToQuestion() {
        const button = this;
        const replySectionDiv = this.parentNode.parentNode.querySelector('.replySection');
        if(button.textContent === 'Reply'){
            replySectionDiv.style.display = 'block';
            button.textContent = 'Back';
        }
        else{
            replySectionDiv.style.display = 'none';
            button.textContent = 'Reply';
        }
        
    }

    function createHTMLElemnt(tagName, className, textContent, attributes, event) {
        
        let element = document.createElement(tagName);

        if(className) {
            element.classList.add(className);
        }

        if(textContent) {
            element.textContent = textContent;
        }

        if(attributes) {
            attributes.forEach((a) => element.setAttribute(a.k, a.v));
        }

        if(event) {
            element.addEventListener(event.type, event.func);
        }

        return element;
    }

    function appendChildrenToParent(children, parent){
        children.forEach((c) => parent.appendChild(c));
        return parent;
    }
}