// --Admin panel - Upload img--
let imgInput = document.querySelector('.product-img-input')
let uploadingTitle = document.querySelector('.uploading-area-title')
imgInput.addEventListener('change',(e)=>{
    let fileName = e.target.value
    uploadingTitle.textContent = fileName.slice(12,fileName.lenght)
})