import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link as Scroll } from "react-scroll";

const KofiButton = dynamic(() => import("react-kofi-button/dist/KofiButton"), {
    ssr: false,
});

const Header = () => {
    return (
        <div className="container flex justify-between items-center pt-3 mx-auto">
            <div>
                <Link href="/" passHref>
                    <a>
                        <Image src="/logo.svg" alt="logo" width={128} height={27} />
                    </a>
                </Link>
            </div>
            <div className="hidden md:flex justify-around w-4/6 lg:w-3/6 text-sm lg:text-base">
                <div>appダウンロード</div>
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
                    <KofiButton username="memoir22983" label="制作者に奢る" preset="skinny" backgroundColor="#F680B2" />
                </div>
            </div>
        </div>
    );
};

export default Header;
