import whatsapp from "../aset/whatsapp.png";
import gmail from "../aset/gmail.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="text-6xl lg:text-8xl font-bold md:px-52 sm:px-20 py-10 text-gray-500">
        CONTACT
      </div>
      <div className="container mx-auto md:px-36 space-y-3 my-4 mb-5">
        <div>
          <a
            href="https://wa.me/+6282268347830"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 font-semibold "
          >
            <img src={whatsapp} alt="whatsapp" />
            <div className="">+62-822-6834-2730</div>
          </a>
        </div>
        <div>
          <a
            href="mailto:raizafr056@gmail.com"
            className="flex items-center space-x-4 font-semibold"
          >
            <img src={gmail} alt="gmail" />
            <div className="">frraiza056@gmail.com</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
