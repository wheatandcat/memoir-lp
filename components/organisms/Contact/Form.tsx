import { useFormik } from "formik";
import { useRouter } from "next/router";
import { memo, useState, useCallback } from "react";
import * as yup from "yup";

type State = {
    name: string;
    email: string;
    body: string;
};

const initialState = (): State => {
    return {
        name: "",
        email: "",
        body: "",
    };
};

type Request = {
    body: string;
    name: string;
    email: string;
    env: string;
    userID: string;
    device: string;
    category: string;
};

const schema = yup.object().shape({
    name: yup.string().required("名前の入力は必須です").max(100, "名前は最大100文字までです"),
    email: yup.string().required("Emailの入力は必須です").email("メールアドレスの形式になっていません"),
    body: yup.string().required("本文の入力は必須です").max(2000, "本文は最大2000文字までです"),
});

const url = process.env.NEXT_PUBLIC_INQUIRY_API || "";

const Form = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const formik = useFormik<State>({
        initialValues: initialState(),
        validationSchema: schema,
        onSubmit: (values) => {
            postInquiry(values);
        },
    });

    const postInquiry = useCallback(
        async (values: State) => {
            const userAgent = navigator.userAgent.toLowerCase();

            setLoading(true);

            const req: Request = {
                body: values.body,
                name: values.name,
                email: values.email,
                userID: "",
                env: "LPサイト",
                device: userAgent,
                category: "LPお問い合わせ",
            };

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req),
            });

            setLoading(false);

            if (!response.ok) {
                alert("送信に失敗しました");
                return;
            }

            router.push(`/thanks?name=${values.name}`);
        },
        [router]
    );

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex z-10 flex-col justify-center items-center py-3 md:py-16 my-3">
                <div id="contact" className="mb-0 md:mb-6 text-3xl leading-snug text-center">
                    お問い合わせ
                </div>
                <br />
                <div className="px-4 sm:px-0 sm:mr-4 w-full sm:w-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center my-5">
                        <div className="mr-2 md:mr-5 w-10 text-right">名前</div>
                        <div className="w-full sm:w-80 md:w-96">
                            <input
                                className="py-2 px-3 w-full leading-tight rounded border shadow appearance-none"
                                type="text"
                                id="name"
                                name="name"
                                aria-label="name"
                                onChange={formik.handleChange}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-sm text-red-600">{formik.errors.name}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-5">
                        <div className="mr-2 md:mr-5 w-10 text-right">Email</div>
                        <div className="w-full sm:w-80 md:w-96">
                            <input
                                className="py-2 px-3 w-full leading-tight rounded border shadow appearance-none "
                                type="text"
                                id="email"
                                name="email"
                                aria-label="email"
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-sm text-red-600">{formik.errors.email}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-5">
                        <div className="mt-1 mr-2 md:mr-5 w-10 text-right">本文</div>
                        <div className="w-full sm:w-80 md:w-96">
                            <textarea
                                className="py-2 px-3 w-full leading-tight rounded border shadow appearance-none "
                                rows={8}
                                id="body"
                                name="body"
                                aria-label="body"
                                onChange={formik.handleChange}
                            />
                            {formik.touched.body && formik.errors.body ? (
                                <div className="text-sm text-red-600">{formik.errors.body}</div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mb-10 md:mb-20 sm:ml-8">
                    <button
                        type="submit"
                        disabled={loading}
                        className="py-2 px-4 w-40 font-bold text-white-300 bg-secondary-600 hover:bg-blue-700 rounded-xl disabled:opacity-50 cursor-pointer"
                    >
                        送信
                    </button>
                </div>
            </div>
        </form>
    );
};

export default memo(Form);
