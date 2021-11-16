import Image from "next/image";

const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center py-3 md:py-16 my-3">
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
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center ml-8">
                <button className="py-2 px-4 w-40 font-bold text-white-300 bg-secondary-600 hover:bg-blue-700 rounded-xl">
                    送信
                </button>
            </div>
        </div>
    );
};

export default Contact;
