import { MotionDiv } from "@/components";
import { BorderBeam } from "@/components/border-beam";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="mx-auto pt-20 md:pt-28 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-10"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6 text-xl md:text-3xl font-semibold">
            About Me
          </h2>
        </MotionDiv>
        <article className="flex flex-col gap-4 text-justify">
          <MotionDiv delayOffset={0.4}>
            <p>
              Hello, I&apos;m Pham Manh ✌. I&apos;m a passionate{" "}
              <b>Full-Stack Developer</b> with 3 years of hands-on experience.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              Throughout my career, I&apos;ve had the opportunity to work on
              several exciting projects where I honed my skills in crafting
              seamless user experiences and building efficient logic. My
              approach to development is characterized by a strong emphasis on
              collaboration, problem-solving, and continuous learning, ensuring
              that I stay updated with the latest industry trends and
              technologies. I hope to leverage my technical skills to build
              valuable apps that can make a difference in people&apos;s lives.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
              In my free time, you&apos;ll often find me experimenting with new
              photography techniques or exploring the latest fashion trends. My
              diverse passions not only fuel my creativity but also contribute
              to my ability to think outside the box in problem-solving
              scenarios. I&apos;m excited to continue my journey in tech,
              further develop my skills, and hopefully collaborate with
              like-minded individuals who share my enthusiasm for innovation and
              creativity.
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <div className="relative w-[300px] h-[400px] md:w-[360px] md:h-[480px] mx-auto rounded-xl">
            <Image
              src={"/assets/images/my-style.jpeg"}
              alt="me"
              fill
              className="rounded-xl"
            />
            <BorderBeam />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
