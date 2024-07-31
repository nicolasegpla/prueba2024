/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react"

const GlobalState = createContext();

function GlobalProvider({children}) {

    const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MzU2MjQ5LCJpYXQiOjE2OTgzNTI2NDksImp0aSI6IjliOGMyYTFkZDg1MjRiNTQ5MjIyYTk3ZTY5ZTM0YThkIiwidXNlcl9pZCI6Mn0.RkDqGJ695K-CgzuDFCyzVZkn2oWZWX3hikzKA7zSsb4'

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://159.65.222.24:8000/deltacu/v1/tramites/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            },
        })
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    

    return(
        <GlobalState.Provider value={{
            data,
        }}>
            {children}
        </GlobalState.Provider>
    )
}

export { GlobalState, GlobalProvider }