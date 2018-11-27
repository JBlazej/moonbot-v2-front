import {Router} from 'express'
//import requireDir from 'require-dir'
import path from 'path'
import { compileFunction } from 'vm';

const htmlPath = path.join(__dirname, '../public/front/', 'index.html')
const css = path.join(__dirname, '../public/front/', 'app.css')

const img1 = path.join(__dirname, '../public/assets/images/front/', 'singlePhone2.png')
const img2 = path.join(__dirname, '../public/assets/images/front/', 'earth.png')
const img3 = path.join(__dirname, '../public/assets/images/front/', 'mcProNew.png')
const img4 = path.join(__dirname, '../public/assets/images/front/', 'iVSE.png')
const img5 = path.join(__dirname, '../public/assets/images/front/', 'iHACKER.png ')
const img6 = path.join(__dirname, '../public/assets/images/front/', 'iFIS.png')
const img7 = path.join(__dirname, '../public/assets/images/front/', 'moonlogo.png')
const img8 = path.join(__dirname, '../public/assets/images/front/', 'frontSpace.png')
const img9 = path.join(__dirname, '../public/assets/images/front/', 'iSpace.png')

const anime = path.join(__dirname, '../public/assets/images/front/', 'singlePhoneAnimation.png')

const moon = path.join(__dirname, '../public/', 'moon.png')
const moon2 = path.join(__dirname, '../public/', 'moon-emoji.png')
const rocket = path.join(__dirname, '../public/', 'rocket.png')

const privacy = path.join(__dirname, '../public/front/', 'privacy-policy.html')

const lightsliderJS = path.join(__dirname, '../public/front/js/', 'lightslider.js')
const lightsliderCSS = path.join(__dirname, '../public/front/css/', 'lightslider.css')

const changePhone = path.join(__dirname, '../public/front/js/', 'changePhone.js')
const scrollAnimation = path.join(__dirname, '../public/front/js/', 'scrollAnimation.js')
const iphoneSlider = path.join(__dirname, '../public/front/js/', 'iphoneSlider.js')

const iphoneIntro = path.join(__dirname, '../public/assets/images/front/', 'iphone-intro.png')
const iphone1 = path.join(__dirname, '../public/assets/images/front/', 'iphone-1.png')
const iphone2 = path.join(__dirname, '../public/assets/images/front/', 'iphone-2.png')
const iphone3 = path.join(__dirname, '../public/assets/images/front/', 'iphone-3.png')
const mac = path.join(__dirname, '../public/assets/images/front/', 'macbook.png')
 
// Source https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#usinges7asyncawait
// const wrap = fn => (...args) => fn(...args).catch(args[2])

const router = Router()

// HOME
router.get('/', (req, res) => {
    res.status(200).sendFile(htmlPath)
})

router.get('/anime', (req, res) => {
    res.status(200).sendFile(anime)
})

router.get('/iphone-intro', (req, res) => {
    res.status(200).sendFile(iphoneIntro)
})

router.get('/iphone-1', (req, res) => {
    res.status(200).sendFile(iphone1)
})

router.get('/iphone-2', (req, res) => {
    res.status(200).sendFile(iphone2)
})

router.get('/iphone-3', (req, res) => {
    res.status(200).sendFile(iphone3)
})

router.get('/macbook', (req, res) => {
    res.status(200).sendFile(mac)
})


router.get('/moons', (req, res) => {
    res.status(200).sendFile(moon)
})

router.get('/moons', (req, res) => {
    res.status(200).sendFile(moon)
})

router.get('/moons', (req, res) => {
    res.status(200).sendFile(moon)
})
router.get('/moon', (req, res) => {
    res.status(200).sendFile(moon2)
})

router.get('/privacy-policy', (req, res) => {
    res.status(200).sendFile(privacy)
})

router.get('/rockets', (req, res) => {
    res.status(200).sendFile(rocket)
})

router.get('/changePhone', (req, res) => {
    res.status(200).sendFile(changePhone)
})

router.get('/scrollAnimation', (req, res) => {
    res.status(200).sendFile(scrollAnimation)
})

router.get('/iphoneSlider', (req, res) => {
    res.status(200).sendFile(iphoneSlider)
})

router.get('/lightsliderjs', (req, res) => {
    res.status(200).sendFile(lightsliderJS)
})
router.get('/lightslidercss', (req, res) => {
    res.status(200).sendFile(lightsliderCSS)
})

router.get('/css', (req, res) => {
    res.status(200).sendFile(css)
})

router.get('/img1', (req, res) => {
    res.status(200).sendFile(img1)
})

router.get('/img2', (req, res) => {
    res.status(200).sendFile(img2)
})

router.get('/img3', (req, res) => {
    res.status(200).sendFile(img3)
})

router.get('/img4', (req, res) => {
    res.status(200).sendFile(img4)
})

router.get('/img5', (req, res) => {
    res.status(200).sendFile(img5)
})

router.get('/img6', (req, res) => {
    res.status(200).sendFile(img6)
})

router.get('/img7', (req, res) => {
    res.status(200).sendFile(img7)
})

router.get('/img8', (req, res) => {
    res.status(200).sendFile(img8)
})

router.get('/img9', (req, res) => {
    res.status(200).sendFile(img9)
})

export default router