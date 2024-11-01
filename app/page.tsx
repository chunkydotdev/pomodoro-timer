import Image from "next/image";
import Timer from "./components/timer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-svh w-full">
        <Timer />
      </div>
      <Image
        src="/assets/timer-bg-mobile.svg"
        alt="a background wave"
        width={1440}
        height={913}
        className="absolute inset-0 top-auto -z-[9] block lg:hidden"
      />
      <Image
        src="/assets/stats-bg.svg"
        alt="a background wave"
        width={1440}
        height={782}
        className="absolute inset-0 top-auto -z-10 block lg:hidden"
      />
      <Image
        src="/assets/timer-bg.svg"
        alt="a background wave"
        width={1440}
        height={913}
        className="absolute inset-0 top-auto -z-[9] lg:block hidden"
      />
      <Image
        src="/assets/stats-bg.svg"
        alt="a background wave"
        width={1440}
        height={782}
        className="absolute inset-0 top-auto -z-10 lg:block hidden"
      />
    </>
  );
}
