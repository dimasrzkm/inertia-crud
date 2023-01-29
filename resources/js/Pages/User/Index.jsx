import {
    EllipsisVerticalIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import Card from "../../Components/Card";
import Dropdown from "../../Components/Dropdown";
import App from "../../Layouts/App";

export default function Index({ users }) {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        username: "",
        address: "",
        email: "",
        password: "",
    });
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
            onSuccess: reset(),
        });
    };
    return (
        <>
            <Card>
                <h2 className="card-title">Add user</h2>
                <form onSubmit={storeUserHandler}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label" htmlFor="name">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="john doe"
                            className="input input-bordered w-full max-w-xs"
                            value={data.name}
                            onChange={changeHandler}
                        />
                        {errors.name && (
                            <span className="text-red-400 tracking-tight">
                                {errors.name}
                            </span>
                        )}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label" htmlFor="username">
                            <span className="label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="johndoe"
                            className="input input-bordered w-full max-w-xs"
                            value={data.username}
                            onChange={changeHandler}
                        />
                        {errors.username && (
                            <span className="text-red-400 tracking-tight">
                                {errors.username}
                            </span>
                        )}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label" htmlFor="email">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="johndoe@gmail.com"
                            className="input input-bordered w-full max-w-xs"
                            value={data.email}
                            onChange={changeHandler}
                        />
                        {errors.email && (
                            <span className="text-red-400 tracking-tight">
                                {errors.email}
                            </span>
                        )}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label" htmlFor="password">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="*******"
                            className="input input-bordered w-full max-w-xs"
                            value={data.password}
                            onChange={changeHandler}
                        />
                        {errors.password && (
                            <span className="text-red-400 tracking-tight">
                                {errors.password}
                            </span>
                        )}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label" htmlFor="address">
                            <span className="label-text">Address</span>
                        </label>
                        <textarea
                            className="textarea border border-gray-300"
                            placeholder="Jln. ikan no.03"
                            id="address"
                            name="address"
                            value={data.address}
                            onChange={changeHandler}
                        />
                        {errors.address && (
                            <span className="text-red-400 tracking-tight">
                                {errors.address}
                            </span>
                        )}
                    </div>
                    <div className="card-actions justify-end mt-3">
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </form>
            </Card>
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
                                            <EllipsisVerticalIcon className="h-5 w-5" />
                                        }
                                    >
                                        <li>
                                            <a className="inline-flex justify-between">
                                                Edit
                                                <PencilIcon className="h-5 w-5" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="inline-flex justify-between">
                                                Delete
                                                <TrashIcon className="h-5 w-5" />
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
