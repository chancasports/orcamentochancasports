document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("valor");
    let valorAtual = 90.00; // Valor inicial do display
    
    // Adiciona evento de clique para cada botão de valor
    const valueButtons = document.querySelectorAll(".value-button");
    valueButtons.forEach(button => {
        button.addEventListener("click", function() {
            const valueToAdd = parseFloat(button.dataset.value); // Valor a ser adicionado
            valorAtual += valueToAdd;
            display.innerText = `R$ ${valorAtual.toFixed(2)}`;
            button.classList.add("active");
            disableButtons(button);
        });
    });
    
    // Adiciona evento de clique para os botões de resetar bloco
    const resetButtons = document.querySelectorAll(".resetButtonsBlock");
    resetButtons.forEach(button => {
        button.addEventListener("click", function() {
            resetBlock(button);
        });
    });

    // Botão para resetar o display para R$ 90,00
    const resetDisplayButton = document.getElementById("resetDisplayButton");
    resetDisplayButton.addEventListener("click", function() {
        valorAtual = 90.00;
        display.innerText = `R$ ${valorAtual.toFixed(2)}`;
        enableAllButtons();
    });

    // Função para desabilitar os botões de valor do bloco exceto o botão de resetar
    function disableButtons(clickedButton) {
        const block = clickedButton.closest(".block");
        const buttonsToDisable = block.querySelectorAll(".value-button");
        buttonsToDisable.forEach(btn => {
            if (btn !== clickedButton) {
                btn.disabled = true;
            }
        });
    }

    // Função para resetar o bloco de botões (habilitar todos os botões e remover valor adicionado do display)
    function resetBlock(clickedButton) {
        const block = clickedButton.closest(".block");
        const buttonsToEnable = block.querySelectorAll(".value-button");

        let valorRemover = 0.00;
        buttonsToEnable.forEach(btn => {
            if (btn.classList.contains("active")) {
                valorRemover += parseFloat(btn.dataset.value);
                btn.classList.remove("active");
            }
            btn.disabled = false;
        });

        valorAtual -= valorRemover;
        display.innerText = `R$ ${valorAtual.toFixed(2)}`;
    }

    // Função para habilitar todos os botões de valor
    function enableAllButtons() {
        valueButtons.forEach(button => {
            button.disabled = false;
            button.classList.remove("active");
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        const linkButtons = document.querySelectorAll(".link-button");
    
        linkButtons.forEach(button => {
            button.addEventListener("click", function() {
                const link = button.dataset.link;
                window.open(link, '_blank');
            });
        });
    });
});
