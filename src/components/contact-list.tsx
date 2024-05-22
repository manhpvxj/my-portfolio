import { Facebook, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MotionList from "./ui/motion-list";
import { ReactElement } from "react";
import Image from "next/image";
type Contact = {
  name: string;
  className: string;
  href: string;
  icon: string;
};
const contacts: Contact[] = [
  {
    name: "Email",
    className: "bg-[#EA4335] hover:bg-[#EA4335CC]",
    href: "mailto:phammanhtb2001@gmail.com",
    icon: "gmail.svg",
  },
  {
    name: "Linkedin",
    className: "bg-[#0A66C2] hover:bg-[#0A66C2CC]",
    href: "https://www.linkedin.com/in/manhpvxj/",
    icon: "linkedin.svg",
  },
  {
    name: "Github",
    className: "bg-[#181717] hover:bg-[#181717CC]",
    href: "https://github.com/manhpvxj",
    icon: "github.svg",
  },
  {
    name: "Facebook",
    className: "bg-[#0866FF] hover:[#0866FFCC]",
    href: "https://facebook.com/manhpvxj",
    icon: "facebook.svg",
  },
  {
    name: "Discord",
    className: "bg-[#5865F2] hover:bg-[#5865F2CC]",
    href: "https://discordapp.com/users/_caomei",
    icon: "discord.svg",
  },
];
export default function ContactList({
  delayOffset = 0,
  showWhenInView = true,
}: Readonly<{
  delayOffset?: number;
  showWhenInView?: boolean;
}>) {
  return (
    <MotionList delayOffset={delayOffset} showWhenInView={showWhenInView}>
      {contacts.map((contact, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "flex items-center justify-center rounded-full p-3 md:h-12 md:w-12"
                )}
                variant={"ghost"}
                asChild
                aria-label={contact.name}
              >
                <Link
                  href={contact.href}
                  target="_blank"
                  aria-label={contact.name}
                >
                  <Image
                    src={`/assets/icons/${contact.icon}`}
                    alt={contact.icon}
                    width={60}
                    height={60}
                  />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </MotionList>
  );
}
