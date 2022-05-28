// --Open menu--
hamburger.addEventListener('click',()=>{
    checkMenuState = true
    menuUl.style.top = '-1px'
})

// --Close menu--
closeMenu.addEventListener('click',()=>{
    checkMenuState = false
    menuUl.style.top = '-260px'
})

// --Create product in Dom for product list array--
productsList.forEach((product)=>{
    // --Create product box El--
    let productBox = document.createElement('div')
    productBox.classList.add('product-box')
    productRoot.appendChild(productBox)

    // --Create img El--
    let productImg = document.createElement('img')
    productImg.classList.add('product-img')
    productImg.setAttribute('src', product.img)
    productBox.appendChild(productImg)

    // --Create title El--
    let productTitle = document.createElement('h3')
    productTitle.classList.add('product-title')
    productTitle.textContent = product.title
    productBox.appendChild(productTitle)

    // --Create price El--
    let productPrice = document.createElement('p')
    productPrice.classList.add('product-price')
    productPrice.textContent = `قیمت: ${product.price}`
    productBox.appendChild(productPrice)

    // --Create button El--
    let addToCardBtn = document.createElement('button')
    addToCardBtn.classList.add('add-to-card')
    addToCardBtn.textContent = 'افزودن به سبد خرید'
    productBox.appendChild(addToCardBtn)
})

// --Shopping list array--
let shoppingList = []

// --Open login page--
adminDashboard.addEventListener('click',(e)=>{
    e.preventDefault()
    showLoginPage = true
    loginPage.style.top = '0'
    setTimeout(()=>{
        loginPage.style.opacity = '1'
        loginPage.style.background = 'var(--login-bg-cover)'
    },120)
})

// --Close login page--
closeLoginPage.addEventListener('click',(e)=>{
    e.preventDefault()
    loginPage.style.background = 'none'
    loginPage.style.opacity = '0'
    setTimeout(()=>{
        loginPage.style.top = '-700px'
    },120)
    showLoginPage = false
})

// --Show password--
eyeIcon.addEventListener('click', ()=>{
    showPass = true
    eyeIcon.style.display = 'none'
    eyeSlashIcon.style.display = 'block'
    passInput.setAttribute('type', 'text')
})

// --Hide password--
eyeSlashIcon.addEventListener('click', ()=>{
    showPass = false
    eyeSlashIcon.style.display = 'none'
    eyeIcon.style.display = 'block'
    passInput.setAttribute('type', 'password')
})

// --Login validation--
let loginMessage = document.createElement('p')
loginMessage.classList.add('login-message')
loginMessageBox.appendChild(loginMessage)

loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(usernameInput.value === 'admin' && passwordInput.value === '123456'){
        loginMessageBox.style.background = '#00ce11'
        loginMessageBox.style.opacity = '1'
        loginMessage.textContent = 'با موفقیت وارد شدید.'
        setTimeout(()=>{
            location.href = './admin-panel.html'
        },400)
    }else{
        loginMessageBox.style.background = '#ad0000'
        loginMessageBox.style.opacity = '1'
        loginMessage.textContent = 'نام کاربری یا رمز عبور اشتباه است.'
    }
})

// --Admin panel - Upload img--