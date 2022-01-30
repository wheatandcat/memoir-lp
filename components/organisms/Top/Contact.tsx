import Image from "next/image";
import Form from "@components/organisms/Contact/Form";

const IMAGE_SCALE = 0.8;

const Contact = () => {
    return (
        <div className="relative">
            <div className="absolute bottom-0 left-0 lg:left-60">
                <Image
                    src="/images/contact01.svg"
                    alt="contact01"
                    className="scale-90 lg:scale-100"
                    width={238 * IMAGE_SCALE}
                    height={348 * IMAGE_SCALE}
                />
            </div>
            <div className="absolute right-0 lg:right-60 bottom-0">
                <Image
                    src="/images/contact02.svg"
                    alt="contact01"
                    className="scale-90 lg:scale-100"
                    width={179 * IMAGE_SCALE}
                    height={353 * IMAGE_SCALE}
                />
            </div>
            <Form />
        </div>
    );
};

export default Contact;
