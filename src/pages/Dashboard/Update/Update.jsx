import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";




const Update = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    const todoData = useLoaderData();
    // console.log(data._id);


    const onSubmit = async (data) => {

        // now send the menu item data to the server with the image url
        const todoItem = {
            title: data.title,
            priority: data.priority,
            deadline: data.deadline,
            description: data.description,
            status: data.status,
            email: user?.email
        }
        const result = await axios.patch(`https://scic-assignment-8-server.vercel.app/update/${todoData._id}`, todoItem);
        console.log(result.data)
        if (result.data.modifiedCount > 0) {
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} is Updated.`,
                showConfirmButton: false,
                timer: 1500
            });
            window.location.reload()
        }


    };

    return (
        <div className="m-4 md:m-16">
 <h1 className="text-2xl font-extrabold bg-gradient-to-r from-[#be4fe0] to-[#4F65E0]  bg-clip-text text-transparent text-center">Edit '{todoData.title}'  TASK!</h1>
            <div className="font-bold">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Title*</span>
                        </label>
                        <input
                            type="text" defaultValue={todoData.title}
                            placeholder="Title"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Priority*</span>
                            </label>
                            <select defaultValue={todoData.priority} {...register('priority', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>

                            </select>
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Status*</span>
                            </label>
                            <select defaultValue={todoData.status} {...register('status', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="To-Do">To-Do</option>
                                <option value="Ongoing">On-Going</option>
                                <option value="Completed">Completed</option>

                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Deadline*</span>
                            </label>
                            <input
                                type="date" defaultValue={todoData.deadline}
                                placeholder="Deadline"
                                {...register('deadline', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register('description')} defaultValue={todoData.description} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </div>

                    <button  className="btn  bg-gradient-to-r from-[#be4fe0] to-[#4F65E0] text-white my-4 px-8 py-2">
                        Update  
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;