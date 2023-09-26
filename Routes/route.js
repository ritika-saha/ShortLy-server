const router = require("express").Router();
const URL=require("../Model/urlSchema")
const { nanoid } = require("nanoid");
const validUrl = require('valid-url');


const dotenv = require("dotenv");
dotenv.config()

const serverURL=process.env.Short_Url||'http://localhost:3000/'

function validateURL(url){
    return validUrl.isUri(url);
}

router.post('/urlShortner',async(req,res)=>{
    const {longUrl}=req.body

    if(!validateURL(longUrl)){
        return res.status(400).json({message: "Invalid URL"})
    }

    try {
        let url=await URL.findOne({longURL: longUrl})

        if(url){
            return res.status(200).json({url: url})
        }

        const ID = nanoid();
        let shorturl=await URL.findOne({shortURL:`${serverURL}/${ID}`})

        if(shorturl){
            return res.status(400).json({message: "Error! try again"})
        }

        const shortUrl= new URL({
            longURL: longUrl,
            shortURL: `${serverURL}/${ID}`
        })

        await shortUrl.save()

        return res.status(200).json({
            url:shortUrl
        })




    } catch (error) {
        return res.status(400).json({message: error.message})
    }

    
})


module.exports=router