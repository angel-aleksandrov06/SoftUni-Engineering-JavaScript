class Company {

    constructor() {
        this.realDepartments = {};
    }

    addEmployee(username, salary, position, department) {
        if (!username || !salary && salary !== 0 || !position || !department) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error(" Invalid input!");
        }

        if (!this.realDepartments[department]) {
            this.realDepartments[department] = [
                {
                    username,
                    salary,
                    position
                }
            ]
        }
        else {
            this.realDepartments[department].push({
                username,
                salary,
                position
            })
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    getHighestAvgSalary(departments) {
        let highestAvgSaleryDepartment = Object.keys(this.realDepartments)
            .sort((a, b) => {
                let avgADepartment = this.realDepartments[a].reduce((acc, e) => acc + Number(e.salary), 0) /this.realDepartments[a].length;
                let avgBDepartment = this.realDepartments[b].reduce((acc, e) => acc + Number(e.salary), 0) /this.realDepartments[b].length;

                return avgBDepartment - avgADepartment;
            })[0];
        
            let highestAvg = this.realDepartments[highestAvgSaleryDepartment].reduce((acc, e) => acc + Number(e.salary), 0) /this.realDepartments[highestAvgSaleryDepartment].length;

        return {
            highestAvgSaleryDepartment,
            highestAvg
        }
    }

    bestDepartment() {
        let highestAvg = this.getHighestAvgSalary(this.realDepartments);

        let sb = "";
        sb+= `Best Department is: ${highestAvg.highestAvgSaleryDepartment}\n`;
        sb+= `Average salary: ${highestAvg.highestAvg.toFixed(2)}\n`;

        this.realDepartments[highestAvg.highestAvgSaleryDepartment].sort((a,b) => {

            if(a.salary === b.salary){
                return a.username.localeCompare(b.username)
            }

            return b.salary - a.salary;
        }).forEach(element => {
            sb+= `${element.username} ${element.salary} ${element.position}\n`
        });

        return sb.trim();
    }
}