import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { User } from '../Interfaces/User';
import axios from 'axios'


export default function useFetch() {

    const [data, setData] = useState<Array<User>>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const history = useHistory();

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        const API_Url = `https://dummyapi.io/data/v1/user`
        axios.get(API_Url, { headers: { 'app-id': '61378543151ea26dedf32390' } })
            .then((data) => setData(data.data.data))
            .catch((err) => {
                setError(err.message)
            })
            .then(() => setLoading(false))
    }


    function moveToUserData(id: string) {
        history.push(`/user/${id}`);
    }

    function moveToUserForm() {
        history.push(`/user/create`);
    }

    return ({ data, loading, error, moveToUserData, moveToUserForm })
}
