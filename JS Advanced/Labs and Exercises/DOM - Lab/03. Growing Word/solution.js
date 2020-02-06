function growingWord() {
    let p = document.querySelector("#exercise p");

    let blueDiv = document.getElementById("blueDiv");
    let greenDiv = document.getElementById("greenDiv");
    let redDiv = document.getElementById("redDiv");

    if(blueDiv.value === "checked"){
        blueDiv.value = "";
        greenDiv.value = "checked";
        let fontSize = p.style.fontSize;
        p.style.fontSize = `${Number(fontSize.replace("px","")) * 2}px`;
        p.style.color = "green";
    }
    else if (greenDiv.value === "checked"){
        greenDiv.value = "";
        redDiv.value = "checked";
        let fontSize = p.style.fontSize;
        p.style.fontSize = `${Number(fontSize.replace("px","")) * 2}px`;
        p.style.color = "red";
    }
    else if(redDiv.value === "checked"){
        redDiv.value = "";
        blueDiv.value = "checked";
        let fontSize = p.style.fontSize;
        p.style.fontSize = `${Number(fontSize.replace("px","")) * 2}px`;
        p.style.color = "blue";
    }
    else{
        blueDiv.value = "checked";
        p.style.fontSize = `${2}px`;
        p.style.color = "blue";
    }
}