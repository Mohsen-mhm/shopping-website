// --Menu--
const menuUl = document.querySelector('.menu-ul')
const hamburger = document.querySelector('.fa-bars')
const closeMenu = document.querySelector('.close-menu')
let checkMenuState = false

// --Products array--
let productsList = [{
    title: 'کتاب روانشناسی',
    price: 85000,
    img:'./img/Book.png',
    id: uuidv4()
},{
    title: 'کتاب برنامه نویسی',
    price: 69000,
    img:'./img/Book.png',
    id: uuidv4()
},{
    title: 'کتاب داستان',
    price: 48000,
    img:'./img/Book.png',
    id: uuidv4()
}]

// --Dom--
let productRoot = document.querySelector('.products-section')

// --Login--
let adminDashboard = document.querySelector('.admin-dashboard')
let loginPage = document.querySelector('.login-page')
let loginBox = document.querySelector('.login-box')
let closeLoginPage = document.querySelector('.close-login-btn')
let showLoginPage = false

// Form - Password
let passInput = document.querySelector('.pass-input')
let eyeIcon = document.querySelector('.fa-eye')
let eyeSlashIcon = document.querySelector('.fa-eye-slash')
let showPass = false

// --Login validation--
let loginForm = document.querySelector('.login-form')
let usernameInput = document.querySelector('.user-input')
let passwordInput = document.querySelector('.pass-input')

let loginMessageBox = document.querySelector('.login-message-box')