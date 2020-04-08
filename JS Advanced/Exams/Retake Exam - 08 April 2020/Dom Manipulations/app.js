function solve() {
    const $elements = {
        task: document.querySelector('#task'),
        description: document.querySelector('#description'),
        date: document.querySelector('#date'),
        AddBtn: document.querySelector('#add'),
        sectionOpen: document.getElementsByTagName('div')[4],
        sectionInProgress: document.querySelector('h1.yellow'),
        compliteSection: document.querySelector('h1.green').parentNode.parentNode
    }

    $elements.AddBtn.addEventListener('click', addTask);

    function addTask(e){
        e.preventDefault();
        const currTask = $elements.task.value;
        const currDescription = $elements.description.value;
        const currDate = $elements.date.value;

        if(currTask !== '' && currDescription !== '' && currDate !== ''){
            let newArticle = createHTMLElemnt('article');
            let newH3 = createHTMLElemnt('h3', null, currTask);
            let newPDescription = createHTMLElemnt('p', null, currDescription)
            let theDate = "Due Date: " + currDate;
            let newPDate = createHTMLElemnt('p', null, theDate);
            let newDivFlex = createHTMLElemnt('div','flex');

            let startBtn = createHTMLElemnt('button', 'green', 'Start', null, {type: 'click', func: startTask});
            let deleteBtn = createHTMLElemnt('button', 'red', 'Delete', null, {type: 'click', func: deleteTask} );

            newDivFlex = appendChildrenToParent([startBtn, deleteBtn], newDivFlex);
            newArticle = appendChildrenToParent([newH3, newPDescription, newPDate, newDivFlex], newArticle);
            $elements.sectionOpen.appendChild(newArticle);
        };
    }

    function startTask(){
        const taskDiv = this.parentNode.parentNode;
        const te = taskDiv;
        taskDiv.remove();

        let deleteBtn = createHTMLElemnt('button', 'red', 'Delete', null, {type: 'click', func: deleteTask} );
        let finishBtn = createHTMLElemnt('button', 'orange', 'Finish', null, {type: 'click', func: finishTask});

        let divFlex = te.querySelector('div.flex');
        divFlex.innerHTML = '';

        divFlex.appendChild(deleteBtn);
        divFlex.appendChild(finishBtn);

        let thebox = $elements.sectionInProgress.parentNode.parentNode.querySelectorAll('div')[1];
        thebox.appendChild(te);

    }
    function deleteTask(){
        const taskDiv = this.parentNode.parentNode
        taskDiv.remove();
    }

    function finishTask() {
        const taskDiv = this.parentNode.parentNode;

        let divFlex = taskDiv.querySelector('div.flex');
        divFlex.remove();

        let currentDiv = $elements.compliteSection.querySelectorAll('div')[1];
        
        currentDiv.appendChild(taskDiv);
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