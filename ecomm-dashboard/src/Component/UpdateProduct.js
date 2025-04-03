import Header from './Header';
import { withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react';

function UpdateProduct(props) {
    const [data, setData] = useState([]);
    console.warn("props", props.match.params.id)
    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/product/" + props.match.params.id)
        result = await result.json()
        setData(result)
    })
    return (
        <div>
            <Header />
            <h1>Update Product page</h1>
            <input type='text' defaultValue={data.name} /><br></br><br></br>
            <input type='text' defaultValue={data.price} /><br></br><br></br>
            <input type='text' defaultValue={data.description} /><br></br><br></br>
            <input type='text' defaultValue={data.file_path} /><br></br><br></br>
            <img style={{ width: 100 }} src={"http://localhost:8000/" + data.file_path}></img>

            <button>Update product</button>
        </div>
    )
}

export default UpdateProduct;