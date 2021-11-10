import Image from "next/image";

const Top = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center py-10 px-3">
            <div>
                <div className="text-4xl lg:text-6xl font-bold tracking-wide leading-tight">
                    終わったタスク、
                    <br />
                    積み上げよう。
                </div>
                <div className="flex pt-10 mt-4">
                    <div className="mr-5">
                        <Image src="/images/ios.svg" alt="iOS" width={180} height={50} />
                    </div>
                    <div>
                        <Image src="/images/android.svg" alt="Android" width={180} height={50} />
                    </div>
                </div>
            </div>
            <div className="sm:w-1/2">
                <Image src="/main.png" alt="Logo" width={1568 / 2} height={1298 / 2} />
            </div>
        </div>
    );
};

export default Top;
