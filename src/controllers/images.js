import path from 'path'
const serverImagesPath = path.join(__dirname, '../../public/assets/images', 'front')

const botImagesPath = path.join(__dirname, '../../public/assets/images', 'bot')

export async function getFrontImages (req, res) {
    try{
        const options = await getFileOptions(serverImagesPath)
        const fileName = req.params.name

        res.sendFile(fileName, options, (err) => {
            if (err)
            return res.status(404).json({
              error: {
                msg: 'File not found'
              }
            })
        
            res.status(200)
        })
    }catch(error){
        res.status(400).json({error : 'Bad request'})
    }
}

export async function getBotImages (req, res) {
    try{
        const options = await getFileOptions(botImagesPath)
        const fileName = req.params.name

        res.sendFile(fileName, options, (err) => {
            if (err)
            return res.status(404).json({
              error: {
                msg: 'File not found'
              }
            })
        
            res.status(200)
        })
    }catch(error){
        res.status(400).json({error : 'Bad request'})
    }
}

async function getFileOptions (path) {
    const options = {
        root: path,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    return options
}