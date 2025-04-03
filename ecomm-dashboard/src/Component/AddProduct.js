import Header from './Header';
import { useState } from 'react';

function AddProduct() {
    const [name, setName] = useState('');
    const [file, setFile] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    async function addProduct() {
        console.warn(name, file, price, description);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        let result = await fetch("http://localhost:8000/api/addProduct", {
            method: 'POST',
            // headers: {
            //     Authorization: `Bearer ${JSON.parse(localStorage.getItem('user-info')).token}`,
            // },
            body: formData
        })
        alert("data has been add")
    }

    return (
        <div>
            <Header />
            <div className='col-sm-6 offset-sm-3'>
                <br></br>
                <input type='text' className='form-control'
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name' /><br></br>
                <input type='file' className='form-control'
                    onChange={(e) => setFile(e.target.files[0])}
                    placeholder='file' /><br></br>
                <input type='text' className='form-control'
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder='price' /><br></br>
                <input type='text' className='form-control'
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='description' /><br></br>
                <button onClick={addProduct} className='btn btn-primary'>Add</button>
            </div>

        </div>
    )
}

export default AddProduct;