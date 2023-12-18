const boton = document.getElementsByClassName('boton');

const envoltorio = document.getElementsByClassName('envoltorio-popup');

const cerrar = document.getElementsByClassName('cerrar-popup');

boton[0].addEventListener('click', () => {
    envoltorio[0].style.display = "block";
});

//click sobre el boton para cerrar el pop-up
cerrar[0].addEventListener('click', () => {
    envoltorio[0].style.display = "none";
});

//click sobre el envoltorio cerrar el popup

envoltorio[0].addEventListener('click', () => {
    envoltorio[0].style.display = "none";
});

const questions = [
    {
        questio: "Que pais tiene mas poblacion?",
        respostaCorrecta: "China",
        respostaIncorrecta: "India"
    }, 

    {
        questio: "Quien fue el primer astronauta en aterrizar en la luna va a ser?",
        respostaCorrecta: "Neil Amstrong",
        respostaIncorrecta: "Louis Amstrong"
    },

    {
        questio: "De que generacion es Blaziken",
        respostaCorrecta: "Hoenn",
        respostaIncorrecta: "Teselia"
    }
];

//
let indexQuestioActual = 0;
let respostesCorrectas = 0;
let respostesIncorrectas = 0;

const questioProposada = document.getElementById('questioProposada');
const btnEsquerre = document.getElementById('btnEsquerre');
const btnDret = document.getElementById('btnDret');
const missatge = document.getElementById('missatge');
const btnReiniciar = document.getElementById('btnReiniciar');

//Mezcla las respuestas
function barrejaRespostes(correcta, incorrecta){
    const respostes = [correcta, incorrecta];
    respostes.sort(() => Math.random() - 0.5);
    return respostes;
}

//
function mostraQuestio(){

    if(indexQuestioActual < questions.length){
        const questioActual = questions[indexQuestioActual];
        questioProposada.textContent = questioActual.questio;

        const [barrejatCorrecta, barrejatIncorrecta] = barrejaRespostes(
            questioActual.respostaCorrecta, 
            questioActual.respostaIncorrecta
        );

        btnEsquerre.textContent = barrejatCorrecta;
        btnDret.textContent = barrejatIncorrecta;

    }else {
        //Fuera del indice valido el juego a terminado

        if(respostesCorrectas === questions.length){ //
            missatge.textContent = "Has ganado, terminaste todas las preguntas";
        }else {
            missatge.textContent = `Juego acabado. Respuestas correctas :${respostesCorrectas}, Respuestas incorrectas: ${respostesIncorrectas}`;
        }

        btnEsquerre.style.display = "none";
        btnDret.style.display = "none";
        btnReiniciar.style.display = "block";
    }
}

function comprovaResposta(respostaSeleccionada){
    const questioActual = questions[indexQuestioActual];

    if(respostaSeleccionada === questioActual.respostaCorrecta){
        respostesCorrectas++;
    }else {
        respostesIncorrectas++;
    }

    indexQuestioActual++;

    mostraQuestio();
}

btnEsquerre.addEventListener("click", () => comprovaResposta(btnEsquerre.textContent));

btnDret.addEventListener("click", () => comprovaResposta(btnDret.textContent));

btnReiniciar.addEventListener("click", () => {
    indexQuestioActual = 0;
    respostesCorrectas = 0;
    respostesIncorrectas = 0;

    missatge.textContent = "";
    btnEsquerre.style.display = "inline-block";
    btnDret.style.display = "inline-block";
    btnReiniciar.style.display = "none";

    mostraQuestio();
});

//comenzar el juego 
mostraQuestio();