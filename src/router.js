import {Router} from 'express'
//import requireDir from 'require-dir'
import path from 'path'

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

 
// Source https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#usinges7asyncawait
// const wrap = fn => (...args) => fn(...args).catch(args[2])

const router = Router()

// HOME
router.get('/', (req, res) => {
    res.status(200).sendFile(htmlPath)
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

export default router