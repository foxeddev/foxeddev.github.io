"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/img/logo-foxeddev.png";
import Card from "@/components/Card";

import { SiGithub, SiDiscord } from "react-icons/si";

export default function Home() {
  const now = new Date();

  function copyDiscordUsername(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    navigator.clipboard.writeText("foxed.alt");
    alert("Copied to clipboard!");
  }

  return (
    <div className="flex flex-col justify-end items-center bg-[url(/img/background-arctic-fox.jpg)] bg-cover bg-fixed min-h-screen size-full font-sans text-gray-800 scroll-smooth">
      <div className="flex flex-col gap-32 bg-white/75 m-32 mt-128 p-20 w-full max-w-4xl">
        <section className="flex flex-col items-center gap-16">
          <Image src={Logo} alt="" className="-mt-40"></Image>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="font-mono text-gray-500 text-4xl">Hi, I&apos;m</p>
            <h1 className="font-extrabold text-gray-800 text-9xl">FOXED</h1>
            <p className="font-mono text-gray-500 text-xl">
              I&apos;m a {now.getFullYear() - 2010} year old developer and
              designer from Germany.
            </p>
          </div>
        </section>
        <section className="gap-8 grid grid-cols-2">
          <Card>
            <SiGithub size={48} className="fill-pink-400"></SiGithub>
            <h3 className="font-medium text-2xl">
              GitHub:{" "}
              <Link
                href={"https://github.com/foxeddev"}
                target="_blank"
                className="text-indigo-600"
              >
                FoxedDev
              </Link>
            </h3>
          </Card>
          <Card>
            <SiDiscord size={48} className="fill-pink-400"></SiDiscord>
            <h3 className="font-medium text-2xl">
              Discord:{" "}
              <Link
                href={""}
                onClick={copyDiscordUsername}
                className="text-indigo-600"
              >
                Foxed.Alt
              </Link>
            </h3>
          </Card>
          <Card cols={2} align="left">
            <div>
              <h3 className="font-medium text-2xl">Tech Stack or something</h3>
              <p className="font-mono text-gray-500">
                OS:{" "}
                <Link
                  href="https://archlinux.org/"
                  target="_blank"
                  className="text-indigo-600 underline"
                >
                  Arch Linux
                </Link>
                <br />
                WM:{" "}
                <Link
                  href="https://hydeproject.pages.dev/"
                  target="_blank"
                  className="text-indigo-600 underline"
                >
                  HyDE
                </Link>{" "}
                (
                <Link
                  href="https://hypr.land/"
                  target="_blank"
                  className="text-indigo-600 underline"
                >
                  Hyprland
                </Link>
                )
                <br />
                Browser:{" "}
                <Link
                  href="https://zen-browser.app/"
                  target="_blank"
                  className="text-indigo-600 underline"
                >
                  Zen Browser
                </Link>{" "}
                (
                <Link
                  href="https://www.firefox.com/"
                  target="_blank"
                  className="text-indigo-600 underline"
                >
                  Firefox
                </Link>{" "}
                based)
                <br />
                Editor:{" "}
                <Link
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  className="text-indigo-600 underline"
                >
                  Visual Studio Code
                </Link>
                <br />
                Minecraft Launcher:{" "}
                <Link
                  href="https://prismlauncher.org/"
                  target="_blank"
                  className="text-indigo-600 underline"
                >
                  Prism Launcher
                </Link>
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
