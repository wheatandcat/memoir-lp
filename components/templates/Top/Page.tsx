import Blockquotes from "@components/organisms/Top/Blockquotes";
import Contact from "@components/organisms/Top/Contact";
import Description from "@components/organisms/Top/Description";
import Document from "@components/organisms/Top/Document";
import Promotion from "@components/organisms/Top/Promotion";
import Top from "@components/organisms/Top/Top";

const Page = () => {
    return (
        <div className="container mx-auto text-secondary-600">
            <Top />
            <Description />
            <Promotion />
            <Document />
            <Contact />
            <Blockquotes />
        </div>
    );
};

export default Page;
