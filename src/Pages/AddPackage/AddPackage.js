import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://creepy-goosebumps-33839.herokuapp.com/packages', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        console.log(data)
    };
    return (
        <Container className="  my-5">
            <form className="pt-3 pb-5 text-center " onSubmit={handleSubmit(onSubmit)}>

                <input className="m-3 w-50 px-4 py-2" {...register("title", { required: true })} placeholder="Package Title" />
                {errors.title && <span>This field is required</span>}
                <input className="m-3 w-50 px-4 py-2" {...register("picture1", { required: true })} placeholder="Package Image URL" />
                {errors.picture1 && <span>This field is required</span>}


                <textarea className="m-3 w-50 px-4 py-2" {...register("about", { required: true })} placeholder="Description" />
                {/* errors will return when field validation fails  */}
                {errors.about && <span>This field is required</span>}

                <input className="m-3 w-50 px-4 py-2" {...register("duration", { required: true })} placeholder="Duration" />
                {errors.duration && <span>This field is required</span>}

                <input className="m-3 w-50 px-4 py-2" {...register("price", { required: true })} type="number" placeholder="Package Price" />
                {errors.price && <span>This field is required</span>}


                <input className="m-3 w-50 px-4 py-2" type="submit" />
            </form>
        </Container>
    );
};

export default AddPackage;