import axios from 'axios'
import { useState } from 'react';
import { useHistory } from "react-router-dom";

interface SubmitUser {
    firstName: string,
    lastName: string,
    email: string
}

export default function useAddUser() {

    const [error, setError] = useState()
    const [data, setData] = useState()
    const history = useHistory();


    function submitData(user: SubmitUser) {


        const API_Url = `https://dummyapi.io/data/v1/user/create`
        axios.post(API_Url, user, { headers: { 'app-id': '61378543151ea26dedf32390' } })
            .then((response) => {
                setData(response.data)
                alert('User Added Successfully!')
                history.push(`/user`);
            })
            .catch((error) => {
                setError(error.message)
            })

    }

    return ({ data, error, submitData })
}
