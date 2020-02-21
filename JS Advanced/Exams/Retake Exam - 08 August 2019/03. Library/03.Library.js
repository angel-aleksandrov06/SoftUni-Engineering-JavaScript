class Library {
    constructor(libraryName){
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: libraryName.length,
            special: libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        };
    }

    subscribe(name, type){
        if(type !== 'normal' && type !== "special" && type !== "vip"){
            throw new Error(`The type ${type} is invalid`);
        }

        if(!this.subscribers.find(x=> x.name === name)){
            let subscriber = {
                name: name,
                type: type,
                books: []
            }
            this.subscribers.push(subscriber);
        }
        else {
            let curPerson = this.subscribers.find(x=> x.name === name);
            curPerson.type = type;
        }

        return this.subscribers.find(x=> x.name === name);
    }

    unsubscribe(name){
        if(!this.subscribers.find(x=> x.name === name)){
            throw new Error(`There is no such subscriber as ${name}`);
        }
        let indexofRemovingElement = this.subscribers.findIndex(x=> x.name === name);
        this.subscribers.splice(indexofRemovingElement,1);
        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor){
        if(!this.subscribers.find(x=> x.name === subscriberName)){
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }
        let curSubscriber = this.subscribers.find(x=> x.name === subscriberName);
        if(this.subscriptionTypes[curSubscriber.type] > curSubscriber.books.length){
            let book = {
                title: bookTitle,
                author: bookAuthor
            }
            curSubscriber.books.push(book);
        }
        else {
            throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[curSubscriber.type]}!`);
        }

        return curSubscriber;
    }

    showInfo(){
        if(this.subscribers.length === 0){
            return `${this.libraryName} has no information about any subscribers`;
        }
        else {
            let sb ="";
            
            for (const subscriber of this.subscribers) {
                let curBook = [];
                for (const book of subscriber.books) {
                    curBook.push(`${book.title} by ${book.author}`);
                }
                sb += `Subscriber: ${subscriber.name}, Type: ${subscriber.type}\nReceived books: ${curBook.join(", ")}\n`;
            }
            return sb;
        }
    }
}