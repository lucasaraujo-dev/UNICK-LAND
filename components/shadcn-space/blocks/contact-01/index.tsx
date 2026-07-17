import ContactInfo from "@/components/shadcn-space/blocks/contact-01/contact-info";
import ContactForm from "@/components/shadcn-space/blocks/contact-01/contact-form";
import { AwakeReveal } from "@/components/unik/awake-motion";

const Contact = () => {
  return (
    <section id="contato" className="py-12 md:py-20">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="grid grid-cols-12 content-center justify-between gap-6 sm:gap-8 md:gap-0">
          <AwakeReveal className="w-full col-span-12 md:col-span-6">
            <ContactInfo />
          </AwakeReveal>
          <div className="col-span-1"></div>
          <AwakeReveal className="w-full col-span-12 md:col-span-5" delay={0.1}>
            <ContactForm />
          </AwakeReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
