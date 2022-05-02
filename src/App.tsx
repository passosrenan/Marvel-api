import React, { useEffect } from 'react';
import axios from 'axios'
import md5 from 'md5'

const baseUrl = 'http://gateway.marvel.com/v1/public/characters?'
const publicKey = '56263709d5af23f6cbb1a43f7c9d2838'
const privateKey = '1dbcef0df0fac6146a21f9a70ed49342cca13660'

const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

const App: React.FC = () => {

  useEffect(() => {
    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`).then(response => console.log(response)).catch(erro => console.log(erro))

  }, [])

  return (
    <div>
      Marvel API
    </div>
  );
}

export default App;
