import { ContactList, MotionDiv, MotionText } from "@/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>
          ✌ Hello, I&apos;m Pham Manh! 👋
        </MotionText>
      </h1>
      <div className="overflow-hidden rounded-full p-3 md:p-4">
        <MotionDiv className="h-[170px] w-[170px] md:h-[190px] md:w-[190px]">
          <Image src={"/assets/avatar.jpg"} alt="avatar" fill />
        </MotionDiv>
      </div>
      <h1 className="text-xl md:text-3xl font-semibold">
        <MotionDiv delayOffset={0.8}>👉 Full-stack Developer 👨🏻‍💻</MotionDiv>
      </h1>
      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%] text-base md:text-lg">
        <MotionDiv delayOffset={1.2}>
          <p>Welcome to my personal page!</p>
        </MotionDiv>
        <MotionDiv delayOffset={1.4}>
          <p>
            I&apos;m a<b> ✨ TypeScript Full-Stack </b>developer who loves to
            build something cool.
          </p>
        </MotionDiv>
      </div>
      <MotionDiv delayOffset={1.6} className="my-8">
        <Button asChild className="p-5">
          <Link href={"/assets/Resume_PhamVanManh.pdf"} target="_blank">
            Download My CV
          </Link>
        </Button>
      </MotionDiv>
    </section>
  );
}
