const router = require("express").Router();
const URL=require("../Model/urlSchema")
const { nanoid } = require("nanoid");
const ID = nanoid();

console.log(ID)

const dotenv = require("dotenv");
dotenv.config()

const serverURL=process.env.Short_Url||'http://localhost:3000/'

function validateURL(url){
    const urlPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;

    return urlPattern.test(url);
}



module.exports=router