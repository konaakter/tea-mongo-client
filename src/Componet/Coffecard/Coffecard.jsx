import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffecard = (params) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = params.loder

    const handledelete = (id) => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                    })

            }
        })

    }
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-10">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <Link to={`/updatecoffe/${_id}`} >
                            <button className="btn">Edit</button>
                        </Link>
                        <button
                            onClick={() => handledelete(_id)}

                            className="btn bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffecard;