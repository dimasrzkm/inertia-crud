import {
    EllipsisVerticalIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import Dropdown from "../../Components/Dropdown";
import Dialog from "../../Components/Dialog";
import App from "../../Layouts/App";
import useDialog from "../../Hooks/useDialog";

export default function Index({ users }) {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        username: "",
        address: "",
        email: "",
        password: "",
    });
    const [modalAdd, closeModal, modalUser] = useDialog();
    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const storeUserHandler = (e) => {
        e.preventDefault();
        post(route("users.store"), {
            data,
            onSuccess: () => {
                reset(), closeModal();
            },
        });
    };
    return (
        <>
            <div className="container">
                <button className="mb-5 btn" onClick={modalAdd}>
                    Add user
                </button>
                <Dialog ref={modalUser} className="z-50">
                    <h2 className="card-title">Add user</h2>
                    <form onSubmit={storeUserHandler}>
                        <div className="w-full form-control ">
                            <label className="w-full label" htmlFor="name">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="john doe"
                                className="w-full input input-bordered "
                                value={data.name}
                                onChange={changeHandler}
                            />
                            {errors.name && (
                                <span className="tracking-tight text-red-400">
                                    {errors.name}
                                </span>
                            )}
                        </div>
                        <div className="w-full form-control ">
                            <label className="label" htmlFor="username">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                name="username"
                                placeholder="johndoe"
                                className="w-full input input-bordered "
                                value={data.username}
                                onChange={changeHandler}
                            />
                            {errors.username && (
                                <span className="tracking-tight text-red-400">
                                    {errors.username}
                                </span>
                            )}
                        </div>
                        <div className="w-full form-control ">
                            <label className="label" htmlFor="email">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="johndoe@gmail.com"
                                className="w-full input input-bordered "
                                value={data.email}
                                onChange={changeHandler}
                            />
                            {errors.email && (
                                <span className="tracking-tight text-red-400">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div className="w-full form-control ">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="*******"
                                className="w-full input input-bordered "
                                value={data.password}
                                onChange={changeHandler}
                            />
                            {errors.password && (
                                <span className="tracking-tight text-red-400">
                                    {errors.password}
                                </span>
                            )}
                        </div>
                        <div className="w-full form-control ">
                            <label className="label" htmlFor="address">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea
                                className="border border-gray-300 textarea"
                                placeholder="Jln. ikan no.03"
                                name="address"
                                value={data.address}
                                onChange={changeHandler}
                            />
                            {errors.address && (
                                <span className="tracking-tight text-red-400">
                                    {errors.address}
                                </span>
                            )}
                        </div>
                        <div className="justify-end mt-3 card-actions">
                            <button
                                type="button"
                                className="btn"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn">
                                Save
                            </button>
                        </div>
                    </form>
                </Dialog>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>
                                    <Dropdown
                                        icons={
                                            <EllipsisVerticalIcon className="w-5 h-5" />
                                        }
                                    >
                                        <li>
                                            <a className="inline-flex justify-between">
                                                Edit
                                                <PencilIcon className="w-5 h-5" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="inline-flex justify-between">
                                                Delete
                                                <TrashIcon className="w-5 h-5" />
                                            </a>
                                        </li>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
Index.layout = (page) => <App children={page} />;
