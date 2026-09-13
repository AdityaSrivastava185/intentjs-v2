import { Marquee } from "../magicui/marquee";
import { ClientTweetCard } from "./tweet-card";

const firstRowIds = [
  "1869430335769063552",
  "1874479134338056423",
  "1905370308074504556",
  "1863625428646133766",
  "1867234132821987825",
  "1904074508178456633",
  "1904093050541891631",
  "1904095266409505257",
];

const secondRowIds = [
  "1868912682948288978",
  "1906368931196981523",
  "1871128762479460676",
  "1869057704683315634",
  "1904096910690120107",
  "1913564692225966216",
];

const thirdRowIds = [
  "1897381960055710079",
  "1904130336893870565",
  "1871554185533284544",
  "1871987696777961778",
  "1875899837352497599",
  "1913583387236851899",
];

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[1000px] w-full flex-col md:flex-row items-center justify-center overflow-hidden gap-6">
      <Marquee vertical className="[--duration:20s] overflow-hidden">
        {firstRowIds.map((id) => (
          <ClientTweetCard key={id} id={id} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="[--duration:20s] hidden md:block overflow-hidden space-y-4"
      >
        {secondRowIds.map((id) => (
          <ClientTweetCard key={id} id={id} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="[--duration:20s] hidden md:block space-y-4 overflow-hidden"
      >
        {thirdRowIds.map((id) => (
          <ClientTweetCard key={id} id={id} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
