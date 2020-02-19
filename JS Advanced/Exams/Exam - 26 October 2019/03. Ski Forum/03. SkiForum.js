class Forum {
    _users = [];
    _questions = [];
    _id = 1;

    register(curUsername, curPassword, CurRepeatPassword, curEmail){
        let isEmptyStringInput = curUsername === "" || curPassword === "" || CurRepeatPassword === "" || curEmail === "";

        if(isEmptyStringInput){
            throw new Error("Input can not be empty");
        }
        if (curPassword !== CurRepeatPassword) {
            throw  new Error("Passwords do not match");
        }
        if (this._users.length > 0) {
            if(this._users.some(x=>x.username === curUsername)){
                throw new Error("This user already exists!");
            }
            if (this._users.some(x => x.email === curEmail)) {
                throw new Error("This user already exists!");
            }
        }

        let user = {
            username: curUsername,
            password: curPassword,
            email: curEmail,
            login: false
        }
        this._users.push(user);
        return `${curUsername} with ${curEmail} was registered successfully!`;
    }

    login(username, password){
        if (this._users.find(x=>x.username === username)) {
            let curUser = this._users.find(x=> x.username === username && x.password === password);
            if(curUser){
                curUser.login = true;
                return "Hello! You have logged in successfully";
            }
        }
        else{
            throw new Error("There is no such user");
        }
    }

    logout(username, password){
        if (this._users.find(x=> x.username === username)) {
            let curUser = this._users.find(x=> x.username === username && x.password === password);
            if(curUser){
                curUser.login = false;
                return "You have logged out successfully";
            }
        }
        else{
            throw new Error("There is no such user");
        }
    }

    postQuestion(username, question){
        if (question === "") {
            throw new Error("Invalid question");
        }

        if (this._users.find(x=> x.username === username && x.login === true)) {
            let questionObj = {
                id: this._id,
                username: username,
                question: question,
            }
            this._questions.push(questionObj);
            this._id += 1;
            return "Your question has been posted successfully";
        }
        else{
            throw new Error("You should be logged in to post questions");
        }
    }

    postAnswer(username, questionId, answer){
        if (answer === "") {
            throw new Error("Invalid answer");
        }

        if (this._users.find(x=> x.username === username && x.login === true)) {
            let question = this._questions.find(x => x.id === questionId);
            if(question === undefined){
                throw new Error("There is no such question");
            }
            if(!question.hasOwnProperty("answers")){
                question.answers = [];
            }
            question.answers.push({ username: username, answer: answer});
            return "Your answer has been posted successfully";
        }
        else{
            throw new Error("You should be logged in to post answers");
        }
    }

    showQuestions(){
        let sb = "";
        for (const questionObj of this._questions) {
            sb+= `Question ${questionObj.id} by ${questionObj.username}: ${questionObj.question}\n`;
            for (const answer of questionObj.answers) {
                sb+= `---${answer.username}: ${answer.answer}\n`;
            }
        }

        return sb.trim();
    }
}