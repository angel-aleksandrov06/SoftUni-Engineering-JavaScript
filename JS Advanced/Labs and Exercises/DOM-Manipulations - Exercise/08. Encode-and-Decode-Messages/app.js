function encodeAndDecodeMessages() {
    let sendButton = document.getElementsByTagName("button")[0];
    let receiveButton = document.getElementsByTagName("button")[1];

    let sendText = document.getElementsByTagName('textarea')[0];
    let decodeText = document.getElementsByTagName('textarea')[1];
    
    sendButton.addEventListener("click", (e) =>{
        let inputInfo = sendText.value;
        let encodedText = '';

        for (let i = 0; i < inputInfo.length; i++) {
            encodedText += String.fromCharCode(inputInfo[i].charCodeAt(0) + 1);
        }
        decodeText.value = encodedText;
        sendText.value = "";
    })

    let handler = (e) =>{
        let input = decodeText.value;
        let decodeMessage = '';

        for (let i = 0; i < input.length; i++) {
            decodeMessage += String.fromCharCode(input[i].charCodeAt(0) - 1);
        }
        decodeText.value = decodeMessage;

        receiveButton.removeEventListener("click", handler)
    }

    receiveButton.addEventListener("click", handler)
}