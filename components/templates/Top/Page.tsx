import Header from "@components/organisms/Header/Header";
import Description from "@components/organisms/Top/Description";
import Top from "@components/organisms/Top/Top";

const Page = () => {
    return (
        <div className="container mx-auto text-secondary-600">
            <Header />
            <Top />
            <Description />
        </div>
    );
};

export default Page;
