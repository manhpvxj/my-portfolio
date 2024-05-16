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
type Contact = {
  name: string;
  className: string;
  href: string;
  icon: ReactElement;
};
const contacts: Contact[] = [
  {
    name: "Email",
    className: "bg-yellow-500 hover:bg-yellow-600",
    href: "mailto:phammanhtb2001@gmail.com",
    icon: <Mail strokeWidth={2} />,
  },
  {
    name: "Linkedin",
    className: "bg-blue-600 hover:bg-blue-700",
    href: "https://www.linkedin.com/in/manhpvxj/",
    icon: <Linkedin strokeWidth={2} />,
  },
  {
    name: "Github",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://github.com/manhpvxj",
    icon: <Github strokeWidth={2} />,
  },
  {
    name: "Facebook",
    className: "bg-blue-600/80 hover:bg-blue-700/90",
    href: "https://facebook.com/ImNotYuuki",
    icon: <Facebook strokeWidth={2} />,
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
                  "flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12",
                  contact.className
                )}
                asChild
                aria-label={contact.name}
              >
                <Link
                  href={contact.href}
                  target="_blank"
                  aria-label={contact.name}
                >
                  {contact.icon}
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
