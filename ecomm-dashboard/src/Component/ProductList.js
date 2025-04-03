import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom'

function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function deleteOperation(id) {
        let result = await fetch("http://localhost:8000/api/delete/" + id, {
            method: 'DELETE',
        });
        result = await result.json();
        console.warn(result);
        getData();
    }

    async function getData() {
        const fetchData = async () => {
            try {
                let response = await fetch("http://localhost:8000/api/list");
                let result = await response.json();
                setData(result);
                console.warn("Fetched data:", result);
            } catch (error) {
                console.error("Lỗi khi fetch dữ liệu:", error);
            }
        };

        fetchData();
    }

    return (
        <div>
            <Header />
            <h1>Product List</h1>
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
                            <td><span onClick={() => deleteOperation(item.id)} className='delete'>delete</span></td>
                            <td>
                                <Link to={'update/' + item.id}>
                                    <span className='update'>update</span>
                                </Link>
                            </td>
                        </tr>
                    ))
                }

            </Table>
        </div>
    );
}

export default ProductList;
