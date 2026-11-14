function generateExcuse() {
    let workInput = document.getElementById("workInput").value;
    let classInput = document.getElementById("classInput").value;
    let outputPara = document.getElementById("exPara");

    if (workInput.trim() === "") {
        outputPara.textContent = "Error 1, Please fill in the Work Input...";
    } else if (classInput.trim() === "") {
        outputPara.textContent = "Error 2, Please fill in the Class Input...";  
    } else {


    let noun = [
        "little brother",
        "little sister",
        "mum"
    ];

    let adverb = [
        "accidentally",
        "casually",
        "randomly"
    ];

    let verb = [
        "threw away",
        "turned off the computer when I didn't save",
        "spilled their drink on",
        "ripped "
    ];

    let randomNoun = noun[Math.floor(Math.random() * noun.length)];
    let randomAdverb = adverb[Math.floor(Math.random() * adverb.length)];
    let randomVerb = verb[Math.floor(Math.random() * verb.length)];

    let excuse = "My " + randomNoun + " " + randomAdverb + " " + randomVerb + " my " + classInput + " " + workInput + "!";

    outputPara.textContent = excuse;
}
}