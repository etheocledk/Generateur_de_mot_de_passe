async function generatePwd() {
    let showLength = document.querySelector('.Character__div__top p:nth-child(2)')
    let range = document.querySelector('#range')
    range.addEventListener('input', () => {
        showLength.textContent = range.value
    })
    let checkbox = document.querySelectorAll('.custom-checkbox')
    let count = 0
    let rectangleColor1 = document.querySelector('.rectangle__parent div')
    let rectangleColor2 = document.querySelector('.rectangle__parent .l2')
    let rectangleColor3 = document.querySelector('.rectangle__parent .l3')
    let rectangleColor4 = document.querySelector('.rectangle__parent .l4')
    let mediumShow = document.querySelector('.stength__parent__medium p')
    if (checkbox) {
        checkbox.forEach(item => {
            item.addEventListener('change', () => {
                if (item.checked) {
                    count += 1
                    if (count === 1) {
                        rectangleColor1.classList.add('active')
                        mediumShow.textContent = 'VERY LOW'
                    } else if (count === 2) {
                        rectangleColor1.classList.add('active')
                        rectangleColor2.classList.add('active')
                        mediumShow.textContent = 'LOW'
                    } else if (count === 3) {
                        rectangleColor1.classList.add('active')
                        rectangleColor2.classList.add('active')
                        rectangleColor3.classList.add('active')
                        mediumShow.textContent = 'MEDIUM'
                    } else if (count === 4) {
                        rectangleColor1.classList.add('active')
                        rectangleColor2.classList.add('active')
                        rectangleColor3.classList.add('active')
                        rectangleColor4.classList.add('active')
                        mediumShow.textContent = 'STRONG'
                    }

                } else {
                    count -= 1
                    if (count === 1) {
                        rectangleColor2.classList.remove('active')
                        mediumShow.textContent = 'VERY LOW'
                    } else if (count === 2) {
                        rectangleColor3.classList.remove('active')
                        rectangleColor4.classList.remove('active')
                        mediumShow.textContent = 'LOW'
                    } else if (count === 3) {
                        rectangleColor4.classList.remove('active')
                        mediumShow.textContent = 'MEDIUM'
                    } else if (count === 0) {
                        rectangleColor1.classList.remove('active')
                        rectangleColor2.classList.remove('active')
                        rectangleColor3.classList.remove('active')
                        rectangleColor4.classList.remove('active')
                        mediumShow.textContent = ''
                    }
                }
            })
        })
    }

    let generateBtn = document.querySelector('.generate-btn button')
    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            let progressionBar = parseInt(showLength.textContent)
            let NOMBRE = progressionBar / count
            let majuscule = ''
            let minuscule = ''
            let number = ''
            let symbol = ''
            if (document.querySelector('.checkbox1').checked == true) {
                let uppcase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
                for (let i = 0; i < Math.round(NOMBRE); i++) {
                    let aleatoire = uppcase[getRandomInt(Math.round(NOMBRE))]
                    majuscule += aleatoire
                }
            }
            if (document.querySelector('.checkbox2').checked == true) {
                let lowcase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
                console.log('benin', lowcase);
                for (let i = 0; i < Math.round(NOMBRE); i++) {
                    let aleatoire = lowcase[getRandomInt(Math.round(NOMBRE))]
                    minuscule += aleatoire
                }
            }
            if (document.querySelector('.checkbox3').checked == true) {
                let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
                for (let i = 0; i < Math.round(NOMBRE); i++) {
                    let aleatoire = numbers[getRandomInt(Math.round(NOMBRE))]
                    number += aleatoire
                }
            }
            if (document.querySelector('.checkbox4').checked == true) {
                let symbols = ['@', '^', '!', '§', '/', '.', '?', '°', '&', '~', '#', '|', '*', '-', '+', '=']
                for (let i = 0; i < Math.round(NOMBRE); i++) {
                    let aleatoire = symbols[getRandomInt(Math.round(NOMBRE))]
                    symbol += aleatoire
                }
            }
            let character = String(majuscule + minuscule + number + symbol)
            let characterTab = character.split("")
            characterTab.sort(function () {
                return 0.5 - Math.random()
            })
            let showPwdNew = characterTab.join("")
            let afficherPWD = ''
            for (let i = 0; i < progressionBar; i++) {
                let aleatoire = showPwdNew[getRandomInt(character.length)]
                afficherPWD += aleatoire
            }
            let showPwd = document.querySelector('.wrapper__container__top .input input')
            let errorTag = document.querySelector('.error')
            errorTag.textContent = ''
            if (count <= 1 || progressionBar === 0) {
                showPwd.value = ''
                errorTag.textContent = 'Cocher au moins deux cases et une valeur valide'
            } else {
                errorTag.textContent = ''
                showPwd.value = afficherPWD
            }
        })
    }
    let copyBtn = document.querySelector('.wrapper__container__top span')
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            let editor = document.querySelector('.wrapper__container__top .input input').value
            navigator.clipboard.writeText(editor)
            if (!copyBtn.classList.contains('active')) {
                copyBtn.classList.add('active')
            } else {
                copyBtn.classList.remove('active')
            }
        })
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}
generatePwd()



