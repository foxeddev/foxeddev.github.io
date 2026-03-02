import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiModrinth, SiDiscord, SiKofi } from "react-icons/si";
import arcticFox from "@/public/arctic_fox.jpg";
import foxFaceplant from "@/public/fox_faceplant.gif";
import ModrinthProject from "@/components/ModrinthProject";
import Clock from "@/components/Clock";
import { FaClock } from "react-icons/fa";
import AlternateCaseTranslator from "@/components/AlternateCaseTranslator";

export default function Home() {
  return (
    <div
      id="wrapper"
      className="selection:bg-secondary min-h-dvh overflow-x-hidden overflow-y-scroll text-text"
    >
      <Image
        src={arcticFox}
        alt="An arctic fox in a snowy environment"
        placeholder="blur"
        className="top-0 left-0 -z-1 fixed size-full object-cover select-none"
      />
      <header className="flex flex-col justify-end items-center h-dvh">
        <div className="flex flex-col gap-4 bg-bg-transparent p-4 md:p-16 w-full max-w-4xl">
          <svg
            width="256"
            height="256"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative mx-auto -mt-32 mb-8"
          >
            <circle cx="128" cy="128" r="128" fill="#1E1E1E" />
            <path
              d="M128 224L48 170.667V64L128 117.333L208 64V170.667L128 224Z"
              stroke="white"
              strokeWidth="12"
              strokeLinejoin="round"
            />
            <path
              d="M117.333 160L90.6667 144V176L117.333 160Z"
              stroke="white"
              strokeWidth="12"
              strokeLinejoin="round"
            />
            <path
              d="M165.333 144L138.667 160L165.333 176V144Z"
              stroke="white"
              strokeWidth="12"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-mono text-text-secondary text-3xl md:text-4xl text-center">
            Hi, I&apos;m
          </p>
          <h1 className="font-black text-8xl md:text-9xl text-center">FOXED</h1>
          <p className="font-mono text-text-secondary text-lg md:text-xl text-center">
            I&apos;m a Minecraft data pack creator and web developer from
            Germany.
          </p>
        </div>
      </header>
      <main className="flex flex-col items-center">
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 bg-bg-transparent p-4 md:p-16 w-full max-w-4xl">
          <ModrinthProject />
          <Link
            href="https://github.com/foxeddev"
            target="_blank"
            className="flex flex-col justify-center gap-4 bg-bg shadow-[0_0_0_0_var(--color-primary)] hover:shadow-[8px_8px_0_0_var(--color-primary)] p-8 text-center transition hover:-translate-2"
          >
            <SiGithub className="mx-auto size-12 text-accent" />
            <p className="font-medium text-primary text-xl">GitHub</p>
          </Link>
          <Link
            href="https://modrinth.com/user/foxeddev"
            target="_blank"
            className="flex flex-col justify-center gap-4 bg-bg shadow-[0_0_0_0_var(--color-primary)] hover:shadow-[8px_8px_0_0_var(--color-primary)] p-8 text-center transition hover:-translate-2"
          >
            <SiModrinth className="mx-auto size-12 text-accent" />
            <p className="font-medium text-primary text-xl">Modrinth</p>
          </Link>
          <Link
            href="https://discord.gg/gjKuefgX4T"
            target="_blank"
            className="flex flex-col justify-center gap-4 bg-bg shadow-[0_0_0_0_var(--color-primary)] hover:shadow-[8px_8px_0_0_var(--color-primary)] p-8 text-center transition hover:-translate-2"
          >
            <SiDiscord className="mx-auto size-12 text-accent" />
            <p className="font-medium text-primary text-xl">Discord</p>
          </Link>
          <Image
            src={foxFaceplant}
            alt="GIF of a fox leaping into snow."
            className="row-span-2 shadow-[0_0_0_0_var(--color-primary)] hover:shadow-[8px_8px_0_0_var(--color-primary)] size-full object-cover transition hover:-translate-2"
          />
          <Link
            href="https://ko-fi.com/foxeddev"
            target="_blank"
            className="flex flex-col justify-center gap-4 bg-bg shadow-[0_0_0_0_var(--color-primary)] hover:shadow-[8px_8px_0_0_var(--color-primary)] p-8 text-center transition hover:-translate-2"
          >
            <SiKofi className="mx-auto size-12 text-accent" />
            <p className="font-medium text-primary text-xl">Ko-Fi</p>
          </Link>
          <AlternateCaseTranslator />
          <Clock />
          <div className="flex flex-col justify-center gap-4 bg-bg shadow-[0_0_0_0_var(--color-primary)] hover:shadow-[8px_8px_0_0_var(--color-primary)] p-8 text-center transition hover:-translate-2">
            <FaClock className="mx-auto size-12 text-accent" />
            <p className="font-medium text-xl">More stuff coming soon!</p>
          </div>
        </div>
      </main>
      <footer className="flex flex-col items-center">
        <div className="bg-bg-transparent p-4 md:p-16 w-full max-w-4xl">
          <p className="font-mono text-text-secondary text-center">
            Made with 💜 by Foxed.
          </p>
        </div>
      </footer>
    </div>
  );
}
