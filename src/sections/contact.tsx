import { ContactList, MotionDiv } from "@/components";

export default function Contact() {
  return (
    <section
      className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8"
      id="contact"
    >
      <MotionDiv>
        <h2 className="text-xl md:text-3xl font-semibold">Contact</h2>
      </MotionDiv>
      <MotionDiv>
        <p>
          If you are interested in working together, please don&apos;t hesitate
          to get in touch with me.
        </p>
      </MotionDiv>
      <ContactList />
    </section>
  );
}
