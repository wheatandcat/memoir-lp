import Blockquotes from "@components/organisms/Top/Blockquotes";
import Contact from "@components/organisms/Top/Contact";
import Description from "@components/organisms/Top/Description";
import Document from "@components/organisms/Top/Document";
import Example from "@components/organisms/Top/Example";
import Promotion from "@components/organisms/Top/Promotion";
import Top from "@components/organisms/Top/Top";

const Page = () => {
    return (
        <div className=" text-secondary-600">
            <div className="container mx-auto">
                <Top />
                <Description />
                <Example />
            </div>
            <Promotion />
            <Document />
            <div className="container mx-auto">
                <Contact />
                <Blockquotes />
            </div>
        </div>
    );
};

export default Page;
