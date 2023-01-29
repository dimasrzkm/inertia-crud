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
            <Toaster position="bottom-right" />
            <div className="flex items-center justify-center h-screen">
                <Card>
                    <h2 className="justify-center text-2xl card-title">
                        Sign in!
                    </h2>
                    <form onSubmit={submitHandler}>
                        <div className="w-full max-w-xs form-control">
                            <label className="label" htmlFor="email">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="johndoe@gmail.com"
                                className="w-full max-w-xs input input-bordered"
                                value={data.email}
                                onChange={changeHandler}
                            />
                            {errors && (
                                <span className="mt-1 text-sm text-red-500">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div className="w-full max-w-xs form-control">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="*******"
                                className="w-full max-w-xs input input-bordered"
                                value={data.password}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="justify-end mt-3 card-actions">
                            <button type="submit" className="btn">
                                Login
                            </button>
                        </div>
                    </form>
                </Card>
            </div>
        </>
    );
}
