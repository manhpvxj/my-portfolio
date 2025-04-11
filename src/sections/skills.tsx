import Image from "next/image";
import { MotionDiv, MotionList } from "@/components";
export default function Skills() {
  const data = [
    {
      title: "Web Development",
      skills: [
        {
          name: "HTML5",
          icon: "html5.png",
        },
        {
          name: "CSS3",
          icon: "css3.png",
        },
        {
          name: "JavaScript",
          icon: "javascript.png",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwindcss.png",
        },
        {
          name: "React.js",
          icon: "react.png",
        },
        {
          name: "Next.js",
          icon: "next-js.png",
        },
        {
          name: "TypeScript",
          icon: "typescript.png",
        },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        {
          name: "React Native",
          icon: "react.png",
        },
        {
          name: "Flutter",
          icon: "flutter.png",
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "TypeScript",
          icon: "typescript.png",
        },
        {
          name: "JavaScript",
          icon: "javascript.png",
        },
        {
          name: "Dart",
          icon: "dart.png",
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Nest.js",
          icon: "nest-js.png",
        },
        {
          name: "Express.js",
          icon: "express-js.png",
        },
        {
          name: "TypeORM",
          icon: "typeorm.png",
        },
        {
          name: "MySQL",
          icon: "mysql.png",
        },
        {
          name: "PostgreSQL",
          icon: "postgres.png",
        },
        {
          name: "Docker",
          icon: "docker.png",
        },
        {
          name: "Redis",
          icon: "redis.png",
        },
        {
          name: "Kubernetes",
          icon: "kubernetes.png",
        },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        {
          name: "VS Code",
          icon: "vscode.png",
        },
        {
          name: "Intellij IDEA",
          icon: "intellij.png",
        },
        {
          name: "Node.js",
          icon: "nodejs.png",
        },
        {
          name: "Postman",
          icon: "postman.png",
        },
        {
          name: "Git",
          icon: "git.png",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center pt-20 md:pt-28"
    >
      <MotionDiv>
        <h2 className="mb-4 text-xl md:text-3xl font-semibold">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3 className="text-base md:text-xl font-medium">{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: Readonly<{ icon: string; name: string }>) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="relative h-16 w-16">
          <Image src={`/assets/icons/${icon}`} alt={name} fill />
        </div>
        <p className="text-sm md:text-base">{name}</p>
      </div>
    </div>
  );
}
