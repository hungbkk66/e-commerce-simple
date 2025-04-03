import Header from './Header';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

function SearchProduct() {
    const [data, setData] = useState([])
    async function search(key) {
        let result = await fetch("http://localhost:8000/api/search/" + key);
        result = await result.json()
        console.warn(result)
        setData(result)
    }

    return (
        <div>
            <Header />
            <div className='col-sm-6 offset-sm-3'>
                <h1>search product</h1>
                <br></br>
                <input type='text' onChange={(e) => search(e.target.value)} className="form-control" placeholder='Search Product' />

                <Table striped bordered hover>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Operations</th>
                    </tr>
                    {
                        data.map((item) => (
                            <tr >
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img style={{ width: 100 }} src={"http://localhost:8000/" + item.file_path} /></td>

                            </tr>
                        ))
                    }

                </Table>
            </div>

        </div>
    )
}

export default SearchProduct;