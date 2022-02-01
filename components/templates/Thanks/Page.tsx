import Link from "next/link";
import { useRouter } from "next/router";

const Page = () => {
    const router = useRouter();
    const { name } = router.query;

    return (
        <div className="container pt-40 mx-auto text-center text-secondary-600">
            <div className="text-5xl leading-relaxed">
                <div>{name} さま、 </div>
                <div>お問い合わせ</div>
                <div>ありがとうございました！</div>
            </div>

            <div className="pt-6 text-xl leading-normal">
                <div>数日中にお返事させていただきます。 </div>
                <div>今しばらくお待ちください。</div>
            </div>

            <div className="pt-8 leading-normal">
                <div>※場合によってはお返事ができない場合があります、ご了承ください。 </div>
            </div>

            <div className="pt-20 leading-normal">
                <Link href="/">トップに戻る</Link>
            </div>
        </div>
    );
};

export default Page;
