import Form from "@/components/form/Form";
import {
  GlobeIcon,
  HomeIcon,
  MailIcon,
  MapIcon,
  PhoneCallIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/**text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/**text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-basic"></span>{" "}
              {/* <div>hello</div> */}
              <div className="flex items-center">
                Say hello
                <Image
                  src={"/images/memoj.png"}
                  width={40}
                  height={40}
                  alt="image"
                />
              </div>
            </div>
            <h1 className="text-4xl text-primary font-bold max-w-md mb-8">
              Let&apos;s Work Together.
            </h1>
            <p className="max-w-[400px] text-muted-foreground text-sm">
              What&apos;s your story? Get in touch. Always freelancing if the
              right project comes along.
            </p>
          </div>
          {/**illustration */}
          <div className="hidden xl:flex w-full">
            <Image
              src={"/images/illustration.png"}
              width={350}
              height={60}
              alt="illustration"
            />
          </div>
        </div>
        {/**info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/**Info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/**mail */}
            <div className="flex items-center gap-x-5">
              <MailIcon size={18} className="text-basic" />
              <div>fiificode@gmail.com</div>
            </div>
            {/**address*/}
            <div className="flex items-center gap-x-5">
              <GlobeIcon size={18} className="text-basic" />
              <div>Accra,Ghana</div>
            </div>
            {/**phone */}
            <div className="flex items-center gap-x-5">
              <PhoneCallIcon size={18} className="text-basic" />
              <div>+233 554-824-341</div>
            </div>
          </div>
          {/**form */}
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
