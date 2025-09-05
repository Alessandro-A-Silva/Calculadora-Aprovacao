document.addEventListener("DOMContentLoaded", () => {
    //seleciona todos radio button
    const radios = document.querySelectorAll(".option");
    //adiciona evento de mudanca a eles
    radios.forEach((radio) => {
        radio.addEventListener("change", (e) => {
            //verifica se o item está selecionado
            if (e.target.checked) {
                //remove todos os itens do form
                let form = document.getElementById("grades");
                Array.from(form.children).forEach((child) => {
                    child.remove();
                })
                //adiciona itens ao form
                for (let i = 0; i < e.target.value; i++) {
                    //cria div
                    let dv = document.createElement("div");
                    dv.setAttribute("class", "lb");
                    //cria label
                    let lb = document.createElement("label");
                    lb.setAttribute("for", `${i + 1}-grade`);
                    lb.textContent = `${i + 1}ª nota (N${i + 1})`;
                    //adiciona label a div
                    dv.appendChild(lb);
                    //adiciona a div ao form
                    form.appendChild(dv);
                    //cria o input
                    let input = document.createElement("input");
                    input.setAttribute("type", "number");
                    input.setAttribute("name", `${i + 1}-grade`);
                    input.setAttribute("min", "0");
                    input.setAttribute("class", "grade")
                    input.setAttribute("maxlength", "5")
                    input.addEventListener("keypress", (a) => {
                        if (a.key == 'e' || a.key == '-') a.preventDefault();
                    })
                    //adiciona o input ao form
                    form.appendChild(input);
                }
                //cria o butão de calcular 
                let btn = document.createElement("button");
                btn.setAttribute("type", "button");
                btn.setAttribute("id", "calculate");
                btn.textContent = "Calcular";
                btn.addEventListener("click", () => {
                    let listGrades = Array.from(document.querySelectorAll(".grade"));
                    let sum = 0;
                    //somando as notas
                    for (let i = 0; i < listGrades.length; i++) {
                        sum += Number(listGrades[i].value);
                    }
                    //calculando a media
                    let average = sum / listGrades.length;
                    //adicionando resultado ao corpo htmnl 
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
                //adiciona butão ao form
                form.appendChild(btn);
            }
        })
    })

    let btnCalculate = document.getElementById("calculate");
    btnCalculate.addEventListener("click", () => {
        let listGrades = Array.from(document.querySelectorAll(".grade"));
        let sum = 0;
        //somando as notas
        for (let i = 0; i < listGrades.length; i++) {
            sum += Number(listGrades[i].value);
        }
        //calculando a media
        let average = sum / listGrades.length;
        //adicionando resultado ao corpo htmnl 
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

    let inputs = Array.from(document.querySelectorAll(".grade"));
    inputs.forEach((input) => {
        input.addEventListener("keypress", (e) => {
            if (e.key == "e" || e.key == "-") e.preventDefault();
        })
    })
});