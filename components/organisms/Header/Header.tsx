import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo, useCallback } from "react";
import { Link as Scroll } from "react-scroll";
import useWindowSize from "hooks/useWindowSize";

const KofiButton = dynamic(() => import("react-kofi-button/dist/KofiButton"), {
    ssr: false,
});

const Header = () => {
    const { width } = useWindowSize();

    const label = useCallback(() => {
        if (width && width < 1000) {
            return "支援する";
        } else if (width && width < 1530) {
            return "支援する";
        }

        return "製作者を支援する";
    }, [width]);

    const router = useRouter();

    return (
        <div className="container flex justify-between items-center pt-3 mx-auto">
            <div>
                <Link href="/" passHref>
                    <a>
                        <Image src="/logo.svg" alt="logo" width={128} height={27} />
                    </a>
                </Link>
            </div>
            {router.pathname === "/" && (
                <>
                    <div className="hidden lg:flex justify-around items-center w-5/6 lg:w-4/6 xl:w-3/6 text-sm lg:text-base">
                        <div />
                        <div className="cursor-pointer">
                            <Scroll to="development" smooth={true} duration={600} offset={-30}>
                                開発について
                            </Scroll>
                        </div>
                        <div className="cursor-pointer">
                            <Scroll to="contact" smooth={true} duration={600} offset={-30}>
                                お問い合わせ
                            </Scroll>
                        </div>
                        <Link href="/privacy" passHref>
                            <a>プライバシーポリシー</a>
                        </Link>

                        <div>
                            <KofiButton
                                username="memoir22983"
                                label={label()}
                                preset="thin"
                                backgroundColor="#F680B2"
                            />
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <KofiButton username="memoir22983" label="支援する" preset="thin" backgroundColor="#F680B2" />
                    </div>
                </>
            )}
        </div>
    );
};

export default memo(Header);
