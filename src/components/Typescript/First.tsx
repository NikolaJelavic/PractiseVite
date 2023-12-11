import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'


export default function First() {
    axios.get(url).then(response=>{
        console.log(response.data);
    })
    return <p>test</p>
};
