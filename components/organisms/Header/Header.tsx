import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="container flex justify-between items-center pt-3 mx-auto">
            <div>
                <Link href="/" passHref>
                    <Image src="/logo.svg" alt="logo" width={128} height={27} />
                </Link>
            </div>
            <div className="hidden md:flex justify-around w-4/6 lg:w-3/6 text-sm lg:text-base">
                <div>appダウンロード</div>
                <div>開発について</div>
                <div>お問い合わせ</div>
                <div>プライバシーポリシー</div>
            </div>
        </div>
    );
};

export default Header;
