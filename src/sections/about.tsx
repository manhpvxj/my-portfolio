import { MotionDiv } from "@/components";
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
              <b>Full-Stack Developer</b>. With 2 years of hands-on experience,
              I&apos;ve honed my skills in both front-end and back-end
              development.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              As a technologies enthusiast, I am highly passionate about
              building full-stack web applications. And I love learning new
              technologies, especially elegant code architectures and design
              patterns. I hope to leverage my technical skills to build valuable
              apps that can make a difference in people&apos;s lives.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
              Besides of programming, I also obsessed with photography. I enjoy
              capturing all things in daily life. So, If you&apos;re passionate
              about both, I hope we can be friend.
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <div className="w-[300px] min-w-[240px] min-h-[320px] h-[400px]">
            <Image
              src={"/assets/images/my-style.JPG"}
              alt="me"
              fill
              className="rounded-xl"
            />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
