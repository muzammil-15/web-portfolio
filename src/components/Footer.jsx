import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full bg-gray-200">
      <div className=" pt-14 pb-2 flex justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="w-full px-5 md:w-[80%] flex flex-col justify-between items-center gap-6 mx-auto">
          <h2 className="text-3xl md:text-5xl font-[700]  heading text-center">Let’s Talk with Me!</h2>
          <p className="text-[#494747] text-lg md:text-xl font-[500] text-center">
            
            As a web developer, I&apos;m here to discuss your project, improve your online presence, or refine your UI/UX design. Let&apos;s connect and create digital success.
          </p>
          <div className="flex justify-center gap-5 md:gap-10 items-center w-full">
            
            <Link href="https://www.linkedin.com/in/muzammil-hussain-a72187262/" target="_blank">
                <Image src={"/assets/l.png"} width={50} height={50} alt="linkedin"/>
            </Link>
            <Link href="https://www.github.com/muzammil-15" target="_blank" className="opacity-50">
                <Image src={"/assets/git.png"} width={50} height={50} alt="linkedin" className="rounded-full"/>
            </Link>
            
            <Link href="https://wa.link" target="_blank">
                <Image src={"/assets/w.png"} width={50} height={50} alt="whatsapp"/>
            </Link>
            <Link href="https://mail.google.com/mail/u/0/muzammilalyari15@gmail.com" target="_blank">
                <Image src={"/assets/m.png"} width={50} height={50} alt="email"/>
            </Link>
          </div>
          <div className="text-[#494747] text-sm sm:text-lg md:text-xl font-[500] text-center align-baseline">&copy; 2024 <span className="heading font-[700]">Muzammil Hussain</span> | All Reserved!</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
