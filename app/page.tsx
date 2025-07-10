"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import Card from "@/components/Card";
import toast from "react-hot-toast";

import { SiGithub, SiDiscord, SiGmail } from "react-icons/si";
import { FaClock } from "react-icons/fa";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CardGrid from "@/components/sections/CardGrid";
import FoxFaceplant from "@/public/img/fox_faceplant.gif";
import Clock from "@/components/Clock";

export default function Home() {
  const now = new Date();

  function copy(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    const target = e.target as HTMLAnchorElement;
    navigator.clipboard.writeText(target.innerHTML);
    toast("Copied to clipboard!", {
      icon: "📋",
    });
  }

  return (
    <>
      <Header>
        <Logo className="bg-gray-800 -mt-36 rounded-full size-64 text-white"></Logo>
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-mono text-gray-500 text-4xl">Hi, I&apos;m</p>
          <h1 className="font-extrabold text-gray-800 text-8xl sm:text-9xl">
            FOXED
          </h1>
          <p className="font-mono text-gray-500 text-xl">
            I&apos;m a {now.getFullYear() - 2010} year old developer and
            designer from Germany.
          </p>
        </div>
      </Header>
      <CardGrid>
        <Card icon={SiGithub}>
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
        <Card icon={SiDiscord}>
          <h3 className="font-medium text-2xl">
            Discord:{" "}
            <span onClick={copy} className="text-indigo-600 cursor-pointer">
              FoxedDev
            </span>
          </h3>
        </Card>
        <Card className="p-0!" rows={2}>
          <Image src={FoxFaceplant} alt={""} className="h-full object-cover"></Image>
        </Card>
        <Card icon={SiGmail}>
          <h3 className="font-medium text-2xl">
            Mail:{" "}
            <Link
              href={"mailto:foxed.dev@gmail.com"}
              target="_blank"
              className="text-indigo-600"
            >
              foxed.dev@gmail.com
            </Link>
          </h3>
        </Card>
        <Card align="left">
          <h3 className="font-medium text-2xl">🌱 I'm currently learning</h3>
          <p className="font-mono text-gray-500">
            React <br />
            NextJS <br />
            TailwindCSS
          </p>
        </Card>
        <Card cols={2} align="left">
          <h3 className="font-medium text-2xl">💻 Tech Stack</h3>
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
        </Card>
        <Card>
          <Clock hasSeconds showSubtext />
        </Card>
        <Card icon={FaClock}>
          <h3 className="font-medium text-2xl">More stuff coming soon!</h3>
        </Card>
      </CardGrid>
      <Footer />
    </>
  );
}
