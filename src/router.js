import {Router} from 'express'
import { tattooFindImage, getBotImages } from './controllers/images'
import path from 'path'

const htmlPath = path.join(__dirname, '../public/front/', 'index.html')
const css = path.join(__dirname, '../public/front/', 'app.css')

const privacy = path.join(__dirname, '../public/front/', 'privacy-policy.html')

const lightsliderJS = path.join(__dirname, '../public/front/js/', 'lightslider.js')
const lightsliderCSS = path.join(__dirname, '../public/front/css/', 'lightslider.css')

const changePhone = path.join(__dirname, '../public/front/js/', 'changePhone.js')
const scrollAnimation = path.join(__dirname, '../public/front/js/', 'scrollAnimation.js')
const iphoneSlider = path.join(__dirname, '../public/front/js/', 'iphoneSlider.js')


const closeSound = path.join(__dirname, '../public/assets/sounds/', 'closeIP.mp3')
const openSound = path.join(__dirname, '../public/assets/sounds/', 'openIP.mp3')
 
// Source https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#usinges7asyncawait
// const wrap = fn => (...args) => fn(...args).catch(args[2])

const router = Router()

// HOME
router.get('/', (req, res) => {
    res.status(200).sendFile(htmlPath)
})

// CSS
router.get('/css', (req, res) => {
    res.status(200).sendFile(css)
})

// PRIVACY POLICY
router.get('/privacy-policy', (req, res) => {
    res.status(200).sendFile(privacy)
})

// JS
router.get('/js/lightsliderjs', (req, res) => {
    res.status(200).sendFile(lightsliderJS)
})

router.get('/js/lightslidercss', (req, res) => {
    res.status(200).sendFile(lightsliderCSS)
})

router.get('/js/changePhone', (req, res) => {
    res.status(200).sendFile(changePhone)
})

router.get('/js/scrollAnimation', (req, res) => {
    res.status(200).sendFile(scrollAnimation)
})

router.get('/js/iphoneSlider', (req, res) => {
    res.status(200).sendFile(iphoneSlider)
})

// AUDIO
router.get('/audio/close', (req, res) => {
    res.status(200).sendFile(closeSound)
})

router.get('/audio/open', (req, res) => {
    res.status(200).sendFile(openSound)
})

// FRONT IMAGES
router.get('/img/:name', tattooFindImage)

// BOT IMAGES
router.get('/bot/:name', tattooFindImage)


export default router