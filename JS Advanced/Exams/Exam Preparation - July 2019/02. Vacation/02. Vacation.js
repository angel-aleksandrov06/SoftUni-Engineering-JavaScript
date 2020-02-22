class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = Number(budget);
        this.kids = {};
    }

    get numberOfChildren() {
        let count = 0;
        for (const key in this.kids) {
            if (this.kids.hasOwnProperty(key)) {
                const element = this.kids[key];
                count += element.length;
            }
        }
        return count;
    }

    registerChild(name, grade, budget) {
        if (Number(budget) >= this.budget) {
            if (!this.kids[grade]) {
                this.kids[grade] = [];
            }
            else {
                if (this.kids[grade].some(x => x.split("-")[0] === name)) {
                    return `${name} is already in the list for this ${this.destination} vacation.`
                }
            }
            this.kids[grade].push(`${name}-${budget}`);
            return this.kids[grade];
        }
        else {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
    }

    removeChild(name, grade) {
        if (this.kids[grade]) {
            if (this.kids[grade].some(x => x.split("-")[0] === name)) {
                this.kids[grade] = this.kids[grade].filter(x => x.split("-")[0] !== name);
                return this.kids[grade];
            }
        }
        return `We couldn't find ${name} in ${grade} grade.`;
    }

    toString() {
        let sb = "";
        let countOfKids = this.numberOfChildren;
        if (Object.entries(this.kids).length === 0) {
            sb += `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
            return sb;
        }
        sb += `${this.organizer} will take ${countOfKids} children on trip to ${this.destination}\n`;

        const ordered = {};

        Object.keys(this.kids).sort().forEach((key) => {
            ordered[key] = this.kids[key];
        });

        for (const key in ordered) {
            sb += `Grade: ${key}\n`;
            if (ordered.hasOwnProperty(key)) {
                const element = ordered[key];
                let count = 1;
                for (const curKid of element) {
                    sb += `${count}. ${curKid}\n`;
                    count++;
                }
            }
        }
        return sb;
    }
}

let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);

vacation.registerChild('Gosho', 12, 3400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Skaro', 11, 400);
vacation.registerChild('Gosho', 11, 3444);
console.log(vacation.toString());

