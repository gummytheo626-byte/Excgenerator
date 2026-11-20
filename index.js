// DOM Elements
const workInputEl = document.getElementById("workInput");
const classInputEl = document.getElementById("classInput");
const head1 = document.getElementById("iHead1");
const head2 = document.getElementById("iHead2");
const scenarioSelect = document.getElementById("SelectorScene");
const outputPara = document.getElementById("exPara");

// Word Lists
const noun = [
    "little brother",
    "little sister",
    "mum",
    "dad",
    "nana",
    "nain",
    "grandma",
    "grandpa",
    "grandad",
    "grandpa",
    "taid"
];

const adverbs = [
    "accidentally",
    "casually",
    "randomly",
    "suddenly",
    "unexpectedly",
    "sneakily",
    "quietly",
    "obnoxiously"
];

const Homeworkverb = [
    "threw away",
    "turned off the computer when I didn't save",
    "spilled their drink on",
    "ripped",
    "deleted",
    "hid",
    "crushed",
    "drew all over",
    "wrote stuff on"
];

const Lateverb = [
    "started a long conversation",
    "started an argument",
    "took a long time getting ready",
    "woke up late",
    "forgot something",
    "lost their keys",
    "changed plans",
];

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function updateScenarioHeaders() {
    const scenario = scenarioSelect.value;

    if (scenario === "Homework") {
        head1.textContent = "Work (Homework, Exam, Recording etc)";
        head2.textContent = "Class (English, Maths, Science etc)";
    } else if (scenario === "LateHome") {
        head1.textContent = `Where you were (Include "the" at the start when needed)`;
        head2.textContent = "What You Were Doing (Getting homework, Walking to school)";
    }
}

function generateHomeworkExcuse() {
    const workVal = workInputEl.value.trim();
    const classVal = classInputEl.value.trim();

    if (workVal === "") {
        outputPara.textContent = "Error 1, Please fill in the Work Input...";
        return;
    }
    if (classVal === "") {
        outputPara.textContent = "Error 2, Please fill in the Class Input...";
        return;
    }

    const randomNoun = pickRandom(noun);
    const randomAdverb = pickRandom(adverbs);
    const randomVerb = pickRandom(Homeworkverb);

    outputPara.textContent = `My ${randomNoun} ${randomAdverb} ${randomVerb} my ${classVal} ${workVal}!`;
}

function LateHomeExcuse() {
    const placeVal = workInputEl.value.trim();
    const activityVal = classInputEl.value.trim();

    if (placeVal === "") {
        outputPara.textContent = "Error 1, Please fill in the first input...";
        return;
    }
    if (activityVal === "") {
        outputPara.textContent = "Error 2, Please fill in the second input...";
        return;
    }

    const randomNoun = pickRandom(noun);
    const randomAdverb = pickRandom(adverbs);
    const randomVerb = pickRandom(Lateverb);

    outputPara.textContent = `Sorry I'm late—I was in ${placeVal}, ${activityVal} when my ${randomNoun} ${randomAdverb} ${randomVerb}.`;
}

function generateExcuse() {
    const scenario = scenarioSelect.value;

    if (scenario === "Homework") {
        generateHomeworkExcuse();
    } else if (scenario === "LateHome") {
        LateHomeExcuse();
    }
}

function copyExcuse() {
    const copyBtn = document.getElementById("copyButton");

    if (outputPara.textContent.startsWith("Error") || outputPara.textContent === "[EXCUSE GENERATED HERE]") {
        alert("GENERATE AN EXCUSE FIRST!");
        return;
    }

    navigator.clipboard.writeText(outputPara.textContent);

    copyBtn.innerHTML = '<span class="material-symbols-outlined">check</span> Copied!';
    setTimeout(() => {
        copyBtn.innerHTML = '<span class="material-symbols-outlined">content_copy</span> Copy';
    }, 2000);
}

const versionNum = document.getElementById("version");
if (versionNum) {
    versionNum.textContent = "1.3";
}

scenarioSelect.addEventListener("change", updateScenarioHeaders);
updateScenarioHeaders();