import { memo, useState, useCallback } from "react";

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

const Form = () => {
    const [state, setState] = useState<State>(initialState());

    const valid = useCallback(() => {
        if (state.email.length === 0) {
            return false;
        }
        if (state.name.length === 0) {
            return false;
        }
        if (state.body.length === 0) {
            return false;
        }

        return true;
    }, [state]);

    console.log(valid());

    return (
        <div className="flex z-10 flex-col justify-center items-center py-3 md:py-16 my-3">
            <div className="mb-0 md:mb-6 text-3xl leading-snug text-center">お問い合わせ</div>
            <br />
            <div className="mr-4">
                <div className="flex items-center my-5">
                    <div className="mr-2 md:mr-5 w-10 text-right">名前</div>
                    <div className="w-80 md:w-96">
                        <input
                            className="py-2 px-3 w-full leading-tight rounded border shadow appearance-none"
                            type="text"
                            aria-label="name"
                            onChange={(e) => setState((v) => ({ ...v, name: e.target.value }))}
                        />
                    </div>
                </div>
                <div className="flex items-center my-5">
                    <div className="mr-2 md:mr-5 w-10 text-right">Email</div>
                    <div className="w-80 md:w-96">
                        <input
                            className="py-2 px-3 w-full leading-tight rounded border shadow appearance-none "
                            type="text"
                            aria-label="email"
                            onChange={(e) => setState((v) => ({ ...v, email: e.target.value }))}
                        />
                    </div>
                </div>
                <div className="flex my-5">
                    <div className="mt-1 mr-2 md:mr-5 w-10 text-right">本文</div>
                    <div className="w-80 md:w-96">
                        <textarea
                            className="py-2 px-3 w-full leading-tight rounded border shadow appearance-none "
                            rows={8}
                            aria-label="body"
                            onChange={(e) => setState((v) => ({ ...v, body: e.target.value }))}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mb-10 md:mb-20 ml-8">
                <button
                    disabled
                    className="py-2 px-4 w-40 font-bold text-white-300 bg-secondary-600 hover:bg-blue-700 rounded-xl cursor-pointer"
                >
                    送信
                </button>
            </div>
        </div>
    );
};

export default memo(Form);
