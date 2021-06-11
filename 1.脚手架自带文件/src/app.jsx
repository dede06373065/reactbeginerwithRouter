import * as React from 'react'
import axios from 'axios'
import userEvent from '@testing-library/user-event';

const {useEffect, useState } = React;
const fetchRandomData = () => {
    return (
        axios.get('https://randomuser.me/api')
            .then(({data}) => {
                // handle success
                
                return JSON.stringify.data;
            })
            .catch(err => {
                // handle error
                console.log(err);
            })

    )

}


export default function App() {
    let [counter, setCounter] = useState(0);
    let [randomUserDataJSON,setRandomUserDataJSON]=useState('');
    useEffect=(()=>{
        const randomData= fetchRandomData();
        setRandomUserDataJSON(randomData);
    })

    return (
        <div>
            <h1>React Interview</h1>
            <span>{counter}</span>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>Add</button>

            <button onClick={() => {
                fetchRandomData()
            }}>Fetch Random Data</button>
            <p>{fetchRandomData}</p>
        </div>
    )
}
