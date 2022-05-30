// --Admin panel - Upload img--
const imgInput = document.querySelector('.product-img-input')
const uploadingArea = document.querySelector('.uploading-area')
const uploadingTitle = document.querySelector('.uploading-area-title')

// --Image & Name preview--
const fileReader = new FileReader()
imgInput.addEventListener('change',(e)=>{
    let fileName = e.target.value
    uploadingTitle.style.top = '80%'
    uploadingTitle.textContent = fileName.slice(12,fileName.lenght)
    console.log(fileReader)
    const files = Array.from(e.target.files)
    var i=0    
    loadFileReader(files,i)
})
let loadFileReader = (files , index)=>{
    const file = files[index]
    if(!file) return false
    fileReader.readAsDataURL(file)

    fileReader.onload = function(event){
        const result = event.target.result
        const productPreviewImg = document.createElement('img')
        productPreviewImg.classList.add('preview-img')
        productPreviewImg.src = result
        uploadingArea.appendChild(productPreviewImg)
        index++
        loadFileReader(files , index)
    }
}