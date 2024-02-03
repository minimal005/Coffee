// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const btnsSign = document.querySelectorAll('.header__sign');
btnsSign.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        const target = e.target;
        if (target) {
            deleteBtnActive()
            target.classList.add('btn_yellow')
        }
    })
})

const deleteBtnActive = () => {
    btnsSign.forEach(item => {
        item.classList.remove('btn_yellow')
    })
}