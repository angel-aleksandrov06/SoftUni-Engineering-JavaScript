function solve() {
    let midler = document.getElementsByTagName("a");

    Array.from(midler).forEach((link) => link.addEventListener("click", (e) => {
        let currentTarget = e.target.parentNode.parentNode.children[1].innerHTML;
        let currentTargetArgs = currentTarget.split(" ");
        let num = Number(currentTargetArgs[1]);
        e.target.parentNode.parentNode.children[1].innerHTML = `visited ${num+1} times`;
    }))
}