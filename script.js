const createCloseButton = () => {
    const imgPrevLg = document.querySelector('.gs-imagePreviewArea');
    const closeBtn = document.createElement("button");
    closeBtn.classList.add('close-button');
    closeBtn.innerText = "x";
    imgPrevLg.appendChild(closeBtn);

    closeBtn.addEventListener('click', () =>{
        imgPrevLg.style.display = 'none';
    })
}

const getImageResult = setTimeout(() => {
    let gscImageResults = document.querySelectorAll('.gsc-result');
    gscImageResults.forEach(result => {
        result.addEventListener('click', () => {
            const closeBtn = document.querySelector('.close-btn')
            if(!closeBtn){
                createCloseButton();
            }
        })
    });
}, 1000);
