document.addEventListener("DOMContentLoaded", () => {

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.addEventListener('keypress', (e) => {
            if (e.key == 'e' || e.key == "-") e.preventDefault();
        });
    });

    const btnCalculate = document.getElementById("calculate");
    btnCalculate.addEventListener("click", () => {

        let firstGrade = Number(document.getElementById("first-grade").value);
        let secondGrade = Number(document.getElementById("second-grade").value);
        let thirdGrade = Number(document.getElementById("third-grade").value);

        let average = (firstGrade + secondGrade + thirdGrade) / 3;

        let result = document.getElementById("result");

        if (average >= 7) {

            result.textContent = `Parabêns você está aprovado(a) com média ${average.toFixed(2)}`;
            result.style = "color: green";

        } else if (average >= 2.5 && average < 7) {

            let finalGradeRequired = 15 - (average * 2);
            result.textContent = `Você terá que realizar a prova final e precisará tirar no minimo a nota de ${finalGradeRequired.toFixed(2)}`;
            result.style = "color: orange";

        } else {

            result.textContent = `Infelizmente você está reprovado(a) a sua média foi de ${average.toFixed(2)} enquanto o valor minimo para ter direito a realizar a prova final é de 2,5!`
            result.style = "color: red";
        }
    })

});