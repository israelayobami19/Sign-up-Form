const Reset = document.getElementById("#reset");
const Submit = document.getElementById("#submit");


const resetSomething = () => {
    alert("Reset Data")
};

Reset.addEventListener("click", resetSomething, false);

const doSomething = () => {
    alert("Submitted Successfully")
};

Submit.addEventListener("click",doSomething,false);
