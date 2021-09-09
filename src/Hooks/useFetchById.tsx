import { useState, useEffect } from 'react'
import axios from 'axios'
import { User } from '../Interfaces/User'


export default function useFetchById(id: string) {

    const [data, setData] = useState<User>()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getDataById(id)
    }, [id])



    function getDataById(id: string): void {


        if (id) {
            const API_Url = `https://dummyapi.io/data/v1/user/${id}`
            axios.get(API_Url, { headers: { 'app-id': '61378543151ea26dedf32390' } })
                .then((data) => setData(data.data))
                .catch((err) => {
                    setError(err.message)
                })
                .then(() => setLoading(false))
        }
    }

    return ({ data, loading, error })
}
