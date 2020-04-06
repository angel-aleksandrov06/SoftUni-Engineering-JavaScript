class Computer {
    constructor(ramMemory, cpuGHz, hddMemory){
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSprace) {
        if(this.hddMemory < requiredSprace) {
            throw new Error('There is not enough space on the hard drive');
        }

        const program = {
            name,
            requiredSprace
        };

        this.installedPrograms.push(program);
        this.hddMemory-= requiredSprace;

        return program;
    }

    uninstallAProgram(name) {
        const programIndex = this.installedPrograms.findIndex((p) => p.name === name);

        if(programIndex === -1) {
            throw new Error('Control panel is not responding');
        }

        const program = this.installedPrograms[programIndex];

        this.installedPrograms.splice(programIndex, 1);
        this.hddMemory+= program.requiredSprace;
        return program;
    }

    openAProgram(name) {
        const programIndex = this.installedPrograms.findIndex((p) => p.name === name);

        if(programIndex === -1) {
            throw new Error(`The ${name} is not recognized`);
        }

        const openedProgramIndex = this.taskManager.findIndex((p) => p.name === name);

        if(openedProgramIndex > -1){
            throw new Error(`The ${name} is already open`)
        }

        let programRequiredSpace = this.installedPrograms[programIndex].requiredSprace;
        let ramUsage = (programRequiredSpace/ this.ramMemory) * 1.5;
        let cpuUsage = ((programRequiredSpace / this.cpuGHz) / 500) * 1.5;

        if(this.totalRamUsage + ramUsage >= 100){
            throw new Error(`${name} caused out of memory exception`)
        }

        if(this.totalCpuUsage + cpuUsage >= 100){
            throw new Error(`${name} caused out of cpu exception`)
        }

        const program = {
            name,
            ramMemory,
            cpuUsage
        }

        this.taskManager.push(program);

        return program;
    }

    taskManagerView() {
        
    }

    get totalRamUsage() {
        return this.taskManager.reduce((acc, curr) => acc + curr.ramUsage, 0)
    }

    get totalCpuUsage() {
        return this.taskManager.reduce((acc, curr) => acc + curr.cpuUsage, 0)
    }
}