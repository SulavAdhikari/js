
function createStageNode(id) {
    return {
      id: id,
      previous: null,
      domObj: document.querySelector(`#${id}`),
      next: null,
    };
  }
  
 
  let stage2 = createStageNode("stage2");
  let stage3 = createStageNode("stage3");
  let stage1 = createStageNode("stage1");
  let stage4 = createStageNode("stage4");
  

  stage1.next = stage2;
  stage2.previous = stage1;
  stage2.next = stage3;
  stage3.previous = stage2;
  stage3.next = stage4;
  stage4.previous = stage3;
  

let currentStage = stage1;
let formStepNum = 0;
const progressSteps = document.querySelectorAll(".progress-step");


function updateProgressBar() {
    progressSteps.forEach((progressStep, idx) => {
      if (idx < formStepNum + 1) {
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
      }
    });
  }

  
function next(){
    console.log('clicked');

    var c = currentStage.domObj;
    c.style.display = 'none';

    currentStage = currentStage.next;
    
    var n = currentStage.domObj;
    n.style.display = 'block';
    formStepNum++;
    updateProgressBar();
}

function previous(){


    var c = currentStage.domObj;
    c.style.display = 'none';

    currentStage = currentStage.previous;

    
    var n = currentStage.domObj;
    n.style.display = 'block';
    formStepNum--;
    updateProgressBar();
}



document.getElementById('nxtbtn1').addEventListener('click', next);
document.getElementById('nxtbtn2').addEventListener('click', next);
document.getElementById('nxtbtn3').addEventListener('click', next);

document.getElementById('prvbtn1').addEventListener('click', previous);
document.getElementById('prvbtn2').addEventListener('click', previous);
document.getElementById('prvbtn3').addEventListener('click',previous);