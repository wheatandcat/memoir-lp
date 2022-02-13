import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";

const Top = () => {
    const matches = useMediaQuery("only screen and (min-width: 640px)");

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center py-10 px-0 md:px-3">
            <div>
                <div className="text-5xl md:text-4xl lg:text-6xl font-bold tracking-wide leading-tight text-center lg:text-left">
                    終わったタスク{matches && "、"}
                    <br />
                    積み上げよう。
                </div>
                {!matches && (
                    <div className="mt-6 sm:w-1/2">
                        <Image src="/main.png" alt="Logo" width={1568 / 2} height={1298 / 2} />
                    </div>
                )}

                <div className="flex justify-center md:justify-start pt-10 mt-0 md:mt-4">
                    <div className="mr-5">
                        <Image src="/images/ios.svg" alt="iOS" width={180} height={50} />
                    </div>
                    <div>
                        <Image src="/images/android.svg" alt="Android" width={180} height={50} />
                    </div>
                </div>
            </div>
            {matches && (
                <div className="sm:w-1/2">
                    <Image src="/main.png" alt="Logo" width={1568 / 2} height={1298 / 2} />
                </div>
            )}
        </div>
    );
};

export default Top;
