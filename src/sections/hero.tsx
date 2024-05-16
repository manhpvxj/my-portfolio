import { MotionDiv, MotionText } from "@/components";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center mt-20 md:mt-32">
      <h1 className="mb-4 text-xl md:text-4xl font-semibold">
        <MotionText delayOffset={0}>
          ✌ Hello, I&apos;m Pham Manh! 👋
        </MotionText>
      </h1>
      <div className="overflow-hidden rounded-full">
        <MotionDiv>
          <div className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] p-5">
            <Image src={"/assets/images/avatar.JPG"} alt="avatar" fill />
          </div>
        </MotionDiv>
      </div>
      <h1 className="text-xl md:text-3xl font-semibold mt-10">
        <MotionDiv delayOffset={0.8}>👉 Full-stack Developer 👨🏻‍💻</MotionDiv>
      </h1>
      <div className="my-10 flex w-full flex-col gap-2 text-center lg:w-[50%] text-base md:text-lg">
        <MotionDiv delayOffset={1.2}>
          <p>Welcome to my personal page!</p>
        </MotionDiv>
        <MotionDiv delayOffset={1.4} className="mt-2">
          <p className="text-center">
            I&apos;m a<b> ✨ TypeScript Full-Stack </b>developer who loves to
            build something cool.
          </p>
        </MotionDiv>
      </div>
      <MotionDiv delayOffset={1.6} className="my-8">
        <Button asChild className="p-5">
          <Link href={"/assets/Resume_PhamVanManh.pdf"} target="_blank">
            <Download strokeWidth={2} className="mr-2" size={20} />
            Download My CV
          </Link>
        </Button>
      </MotionDiv>
    </section>
  );
}
