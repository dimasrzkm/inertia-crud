import React from "react";

export default function FormUser({
    handler,
    data,
    changeHandler,
    closeHandler,
    errors,
    reset,
}) {
    return (
        <form onSubmit={handler}>
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
                    onClick={() => {
                        closeHandler(), reset();
                    }}
                >
                    Cancel
                </button>
                <button type="submit" className="btn">
                    Save
                </button>
            </div>
        </form>
    );
}
