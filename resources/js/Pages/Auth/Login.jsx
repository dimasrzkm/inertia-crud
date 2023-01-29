import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import Card from "../../Components/Card";

export default function Login({ errors }) {
    const { flash } = usePage().props;
    useEffect(() => {
        flash.message && toast.success(flash.message);
    }, [flash.message]);
    const { data, setData, post } = useForm({
        email: "jamal14@example.org",
        password: "password",
    });
    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value,
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post("login", data);
    };
    return (
        <>
            <Toaster position="top-right" />
            <div className="flex justify-center items-center h-screen">
                <Card>
                    <h2 className="card-title justify-center text-2xl">
                        Sign in!
                    </h2>
                    <form onSubmit={submitHandler}>
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
                            {errors && (
                                <span className="text-red-500 text-sm mt-1">
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
                        </div>
                        <div className="card-actions justify-end mt-3">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </Card>
            </div>
        </>
    );
}
