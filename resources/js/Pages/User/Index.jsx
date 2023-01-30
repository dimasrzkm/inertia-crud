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
import Pagination from "../../Components/Pagination";
import { Inertia } from "@inertiajs/inertia";
import FormUser from "../../Components/User/FormUser";

export default function Index(props) {
    const { data, setData, post, put, errors, reset } = useForm({
        name: "",
        username: "",
        address: "",
        email: "",
        password: "",
    });
    // pagination
    const { data: users, links, from } = props.users;
    // modal
    const [openModalAdd, closeModalAdd, modalUser] = useDialog();
    const [openModalEdit, closeModalEdit, modalEdit] = useDialog();
    const [openModalDelete, closeModalDelete, modalDelete] = useDialog();
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
                reset(), closeModalAdd();
            },
        });
    };
    const openEditDialog = (user) => {
        setData(user);
        openModalEdit();
    };
    const updateUserHandler = (e) => {
        e.preventDefault();
        put(route("users.update", data.id), {
            data,
            onSuccess: () => {
                reset(), closeModalEdit();
            },
        });
    };
    const openDeleteDialog = (user) => {
        setData(user);
        openModalDelete();
    };
    const deleteUserHandler = (e) => {
        e.preventDefault();
        Inertia.delete(route("users.destroy", data.id), {
            data,
            onSuccess: () => {
                reset(), closeModalDelete();
            },
        });
    };
    return (
        <>
            <div className="container">
                <button className="mb-5 btn" onClick={openModalAdd}>
                    Add user
                </button>
                <Dialog ref={modalUser}>
                    <h2 className="card-title">Add user</h2>
                    <FormUser
                        handler={storeUserHandler}
                        data={data}
                        changeHandler={changeHandler}
                        closeHandler={closeModalAdd}
                        errors={errors}
                        reset={reset}
                    />
                </Dialog>
                <Dialog ref={modalEdit}>
                    <h2 className="card-title">Edit user</h2>
                    <FormUser
                        handler={updateUserHandler}
                        data={data}
                        changeHandler={changeHandler}
                        closeHandler={closeModalEdit}
                        errors={errors}
                        reset={reset}
                    />
                </Dialog>
                <Dialog ref={modalDelete}>
                    <h2 className="card-title">
                        Are you sure delete user : {data.name}
                    </h2>
                    <div className="justify-end py-5 card-actions">
                        <button
                            className="btn"
                            onClick={() => {
                                reset(), closeModalDelete();
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-red-500 border-none btn hover:bg-red-600"
                            onClick={deleteUserHandler}
                        >
                            Delete
                        </button>
                    </div>
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
                                <th>{from + index}</th>
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
                                            <button
                                                className="inline-flex justify-between"
                                                onClick={() =>
                                                    openEditDialog(user)
                                                }
                                            >
                                                Edit
                                                <PencilIcon className="w-5 h-5" />
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="inline-flex justify-between"
                                                onClick={() => [
                                                    openDeleteDialog(user),
                                                ]}
                                            >
                                                Delete
                                                <TrashIcon className="w-5 h-5" />
                                            </button>
                                        </li>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination links={links} />
        </>
    );
}
Index.layout = (page) => <App children={page} />;
