import axios from "axios"
import md5 from "md5"

const baseUrl = 'http://gateway.marvel.com/v1/public/characters?'
const publicKey = '56263709d5af23f6cbb1a43f7c9d2838'
const privateKey = '1dbcef0df0fac6146a21f9a70ed49342cca13660'
const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
    params:{
        ts:time, 
        apiKey: publicKey,
        hash: hash
    }

});

export default api