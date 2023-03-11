// getElements
const elList = document.querySelector(".list");
const elTempMemory = document.querySelector(".temp-memory").content;

// variables
let count = 0;
let countIkkilik = 0;
let arr = [];
let arrIkkilik = [];
let sum = 0;
let indexarr = [];
let correctCounter = 0;



// functions
function render() {
    for (let i = 0; i < 8; i++) {
        count = Math.floor(Math.random() * 8) + 1;
        if (!arr.includes(count)) {
            arr.push(count);
            const cloneTemp = elTempMemory.cloneNode(true);
            cloneTemp.querySelector("[rasm]").src = `./images/rasm-${count}.png`;
            elList.appendChild(cloneTemp);
        } else {
            i--;
            continue;
        }
    }
}
function renderIkkilik() {
    for (let i = 0; i < 8; i++) {
        countIkkilik = Math.floor(Math.random() * 8) + 1;
        if (!arrIkkilik.includes(countIkkilik)) {
            arrIkkilik.push(countIkkilik);
            const cloneTemp = elTempMemory.cloneNode(true);
            cloneTemp.querySelector("[rasm]").src = `./images/rasm-${countIkkilik}.png`;
            elList.appendChild(cloneTemp);
        } else {
            i--;
            continue;
        }
    }
}
render();
renderIkkilik();
if (count > 0) {
    const elDiv = document.querySelectorAll(".start-img");
    const elImg = document.querySelectorAll("[rasm]");
    elDiv.forEach((value, index) => {
        value.addEventListener("click", () => {
            if (sum < 2) {
                console.log(sum)
                sum++;
                indexarr.push(index);
                value.classList.add("tranformX")
                elImg[index].classList.add("tranformXReverce")
                setTimeout(() => {
                    elImg[index].classList.remove("d-none")
                    value.classList.add("d-none")
                }, 280)
                if (sum === 2) {
                    setTimeout(() => {
                        sum = 0;
                        if (elImg[indexarr[0]].src === elImg[indexarr[1]].src) {
                            correctCounter++;
                            if (correctCounter === 8) {
                                elList.classList.add("display-2", "position")
                                elList.innerHTML = "You Win!"
                            }
                        } else {
                            elImg.forEach((item, index) => {
                                if (index === indexarr[0] || index === indexarr[1]) {
                                    item.classList.add("tranformX")
                                    elDiv[index].classList.add("tranformXReverce")
                                    setTimeout(() => {
                                        elDiv[index].classList.remove("d-none")
                                        item.classList.add("d-none")
                                    }, 280)
                                }
                            })
                        }
                        indexarr = [];
                    }, 1000)
                }
            }
        })
    })
}