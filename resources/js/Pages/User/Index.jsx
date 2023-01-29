import {
    EllipsisVerticalIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Card from "../../Components/Card";
import Dropdown from "../../Components/Dropdown";
import App from "../../Layouts/App";

export default function Index({ users }) {
    return (
        <>
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
