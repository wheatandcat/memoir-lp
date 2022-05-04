import Image from "next/image";

const Top = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center py-10 px-0 md:px-3">
            <div>
                <div className="hidden sm:block text-5xl md:text-4xl lg:text-6xl font-bold tracking-wide leading-tight text-center lg:text-left">
                    終わったタスク、
                    <br />
                    積み上げよう。
                </div>
                <div className="sm:hidden text-5xl md:text-4xl lg:text-6xl font-bold tracking-wide leading-tight text-center lg:text-left">
                    終わったタスク
                    <br />
                    積み上げよう。
                </div>

                <div className="sm:hidden mt-6 sm:w-1/2">
                    <Image src="/main.png" alt="Logo" width={1568 / 2} height={1298 / 2} />
                </div>

                <div className="flex justify-center md:justify-start pt-10 sm:pt-0 mt-0 md:mt-4">
                    <div className="mr-5">
                        <a
                            href="https://apps.apple.com/jp/app/memoir/id1613532672"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Apple Store"
                        >
                            <Image src="/images/ios.svg" alt="iOS" width={180} height={50} />
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.wheatandcat.memoir"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Google Play"
                        >
                            <Image src="/images/android.svg" alt="Android" width={180} height={50} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block sm:w-1/2">
                <Image src="/main.png" alt="Logo" width={1568 / 2} height={1298 / 2} />
            </div>
        </div>
    );
};

export default Top;
