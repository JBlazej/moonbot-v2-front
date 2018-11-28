import path from 'path'
const serverImagesPath = path.join(__dirname, '../public/assets/images', 'front')

export async function tattooFindImage (req, res) {
    try{
        const options = await getFileOptions()
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

async function getFileOptions () {
    const options = {
        root: serverImagesPath,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    return options
}