

function excuseGen() {
    let excuse = document.getElementById("excuse");
    let nouns = ["my Dog", "My Mom", "My girlfriend", "My wife", "My house"];
    let verb = ["ate", "didn't let me go", "wants to have sex", "will get mad if i drink", "burnt"];
    let when = ["last night", "today", "right now", "at the party", "yesterday"];

    let answer = "I can't go." + " " + nouns[Math.floor(Math.random() * 5)] + " " + verb[Math.floor(Math.random() * 5)] + " " + when[Math.floor(Math.random() * 5)];

    excuse.innerHTML = answer;
}
    