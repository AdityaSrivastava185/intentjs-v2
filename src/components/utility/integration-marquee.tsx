import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
import Image from "next/image";

const integrationLogos = [
  { name: "AWS", src: "/aws-color.png" },
  { name: "Firebase", src: "/integrationIcons/firebase.svg" },
  { name: "Subabase", src: "/integrationIcons/supabase.svg" },
  { name: "Vuejs", src: "/integrationIcons/vuejs.svg" },
  { name: "Javascript", src: "/integrationIcons/js.svg" },
  { name: "Posrman", src: "/integrationIcons/postman.svg" },
  { name: "Postgresql", src: "/integrationIcons/postgresql.svg" },
  { name: "Azure", src: "/azure-color.png" },
  { name: "Cursor", src: "/mysql-color.png" },
  { name: "Redis", src: "/redis-color.png" },
  { name: "AWS", src: "/aws-color.png" },
];

const secondRowIcons = [
  { name: "kotlin", src: "/cloudIcons/kotlin.svg" },
  { name: "Kuberbnetes", src: "/cloudIcons/kubernetes.svg" },
  { name: "Larvel", src: "/cloudIcons/laravel.svg" },
  { name: "Mongodb", src: "/cloudIcons/mongodb.svg" },
  { name: "Mysql", src: "/cloudIcons/mysql.svg" },
  { name: "Nextjs", src: "/cloudIcons/nextjs.svg" },
  { name: "Python", src: "/cloudIcons/python.svg" },
  { name: "Powershell", src: "/cloudIcons/powershell.svg" },
];

const firstRow = integrationLogos;
const secondRow = secondRowIcons;
const thirdRow = integrationLogos;

// const LogoCard = ({ src, name }: { src: string; name: string }) => {
//   return (
//     <div className="flex items-center justify-center mx-4">
//       <Image
//         src={src || "/placeholder.svg"}
//         alt={name}
//         width={40}
//         height={40}
//         className="w-10 h-10 md:w-12 md:h-12 object-contain"
//       />
//     </div>
//   );
// };

const LogoCard = ({ src, name }: { src: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full cursor-pointer overflow-hidden rounded-xl border md:p-1",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        ""
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={src || "/placeholder.svg"}
          alt={name}
          width={40}
          height={40}
          className="w-8 h-10 md:w-8 md:h-10 object-contain"
        />
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="block relative md:max-w-2xl mx-auto md:rounded-3xl md:overflow-x-hidden bg-none md:backdrop-blur-xl md:border md:border-white/10 md:p-8">
      {/* First Marquee Row */}
      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((logo, index) => (
          <LogoCard key={index} {...logo} />
        ))}
      </Marquee>

      {/* Second Marquee Row (Reversed) */}
      <Marquee pauseOnHover reverse className="[--duration:10s] mt-4">
        {secondRow.map((logo, index) => (
          <LogoCard key={index} {...logo} />
        ))}
      </Marquee>

      {/* Third Marquee Row */}
      <Marquee pauseOnHover className="[--duration:10s] mt-4">
        {thirdRow.map((logo, index) => (
          <LogoCard key={index} {...logo} />
        ))}
      </Marquee>

      {/* Gradient Fades on Edges */}
      <div className="hidden md:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 "></div>
      </div>
    </div>
  );
}
