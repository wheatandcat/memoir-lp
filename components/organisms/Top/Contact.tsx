import Image from "next/image";

const IMAGE_SCALE = 0.8;

const Contact = () => {
    return (
        <div className="relative">
            <div className="hidden md:block absolute bottom-0 w-full">
                <div className="flex justify-between md:justify-center">
                    <div className="w-3/4 lg:w-1/2">
                        <Image
                            src="/images/contact01.svg"
                            alt="contact01"
                            className="scale-90 lg:scale-100"
                            width={238 * IMAGE_SCALE}
                            height={348 * IMAGE_SCALE}
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/contact02.svg"
                            alt="contact01"
                            className="scale-90 lg:scale-100"
                            width={179 * IMAGE_SCALE}
                            height={353 * IMAGE_SCALE}
                        />
                    </div>
                </div>
            </div>
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
                <div className="flex justify-center items-center mb-20 ml-8">
                    <button className="py-2 px-4 w-40 font-bold text-white-300 bg-secondary-600 hover:bg-blue-700 rounded-xl">
                        送信
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
