document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAtiva = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAtiva}]`)
            escondeAbas()
            aba.classList.add('show__content--is-active')
        })
    }

})

function escondeAbas() {
    const tabscontainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabscontainer.length; i++) {
        tabscontainer[i].classList.remove('show__content--is-active')
    }
}