import axios from "axios"
import { useEffect, useState } from "react"
import api from "../../services/api"

interface ResponseData{
    id:string,
    name:string,
    description:string,
    thumbnail:{
        path:string,
        extension: string,
    }
}

const Characters: React.FC = () => {

    const [characters, setCharacters] = useState<ResponseData[]>([])
    return (
        useEffect(() => {
            api.get('/characters').then(response =>{
                console.log(response.data.data.results);
                setCharacters(response.data.data.results);
                console.log('Segundo log: ', characters);
            })
            .catch(erro => console.log(erro))
        }, [characters]),
    

        <h1>Personagens</h1 >
    )

}
export default Characters
