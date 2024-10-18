// Calculadora

// Obtém o elemento de exibição da calculadora
const display = document.getElementById("calc-display");
// Obtém todos os botões da calculadora
const buttons = document.querySelectorAll("button");
// Obtém o elemento da calculadora
const calculator = document.getElementById("calculadora");


// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("digit") || button.classList.contains("operator")) {
            let buttonText = button.textContent;

            if (buttonText === "÷") {
                buttonText = "/";
            } else if (buttonText === "x") {
                buttonText = "*";
            }
            display.value += buttonText;
        } else if (button.classList.contains("equal")) {
            try {
                // Divide a expressão em partes e remove zeros à esquerda de cada número
                const expression = display.value.replace(/(\d+\.?\d*)/g, function(match) {
                    return parseFloat(match); // Remove zeros à esquerda convertendo para float
                });
                display.value = eval(expression);
            } catch (error) {
                display.value = "Error";
            }
        } else if (button.classList.contains("function")) {
            handleFunction(button.id);
        }
    });
});

// Função para manipular funções especiais
function handleFunction(id) {
    switch (id) {
        case "clear":
            display.value = "";
            break;
        case "backspace":
            display.value = display.value.slice(0, -1);
            break;
        case "percentage":
            display.value = eval(display.value) / 100;
            break;
        default:
            break;
    }
}
// Fim Calculadora