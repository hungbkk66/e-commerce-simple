import Header from './Header';
import { useState } from 'react';

function AddProduct() {
    const [name, setName] = useState('');
    const [file, setFile] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

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
                <button className='btn btn-primary'>Add</button>
            </div>

        </div>
    )
}

export default AddProduct;