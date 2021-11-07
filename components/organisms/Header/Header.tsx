import Image from "next/image";

const Header = () => {
    return (
        <div className="flex justify-between items-center pt-3">
            <div>
                <Image src="/logo.svg" alt="logo" width={128} height={27} />
            </div>
            <div className="flex justify-around w-7/12">
                <div>appダウンロード</div>
                <div>開発について</div>
                <div>お問い合わせ</div>
                <div>プライバシーポリシー</div>
            </div>
        </div>
    );
};

export default Header;
