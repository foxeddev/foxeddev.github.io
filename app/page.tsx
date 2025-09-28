"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import Card from "@/components/Card";
import { SiGithub, SiDiscord, SiGmail } from "react-icons/si";
import { FaClock } from "react-icons/fa";
import FoxFaceplant from "@/public/img/fox_faceplant.gif";
import Clock from "@/components/Clock";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";
import headerIconStyles from "@/styles/headerIcon.module.css";
import titleStyles from "@/styles/title.module.css";

export default function Home() {
  const now = new Date();

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard!", {
      icon: "📋",
    });
  };

  return (
    <div>
      <header>
        <section>
          <Logo className={headerIconStyles.icon} />
          <div className={titleStyles.title}>
            <p className={titleStyles.tagline}>Hi, I&apos;m</p>
            <h1>FOXED</h1>
            <p className={titleStyles.subtitle}>
              I&apos;m a {now.getFullYear() - 2010} year old developer and
              designer from Germany.
            </p>
          </div>
        </section>
      </header>
      <main>
        <section className="grid">
          <Card>
            <SiGithub />
            <h3>
              GitHub:{" "}
              <Link href={"https://github.com/foxeddev"} target="_blank">
                FoxedDev
              </Link>
            </h3>
          </Card>
          <Card>
            <SiDiscord />
            <h3>
              Discord: <mark onClick={() => copy("foxeddev")}>FoxedDev</mark>
            </h3>
          </Card>
          <Card rows={2} noPad>
            <Image src={FoxFaceplant} alt={""} unoptimized />
          </Card>
          <Card>
            <SiGmail />
            <h3>
              Mail:{" "}
              <Link href={"mailto:foxed.dev@gmail.com"} target="_blank">
                foxed.dev@gmail.com
              </Link>
            </h3>
          </Card>
          <Card align="left">
            <h3>🌱 I&apos;m currently learning</h3>
            <p>
              React <br />
              NextJS <br />
              TailwindCSS <br />
            </p>
          </Card>
          <Card cols={2} align="left">
            <h3>💻 Tech Stack</h3>
            <p>
              OS:{" "}
              <Link href="https://archlinux.org/" target="_blank">
                Arch Linux
              </Link>
              <br />
              WM:{" "}
              <Link href="https://hydeproject.pages.dev/" target="_blank">
                HyDE
              </Link>
              {" "}(
              <Link href="https://hypr.land/" target="_blank">
                Hyprland
              </Link>
              )<br />
              Browser:{" "}
              <Link href="https://www.firefox.com/" target="_blank">
                Firefox
              </Link>
              <br />
              Editor:{" "}
              <Link href="https://code.visualstudio.com/" target="_blank">
                Visual Studio Code
              </Link>
              <br />
              Minecraft Launcher:{" "}
              <Link href="https://prismlauncher.org/" target="_blank">
                Prism Launcher
              </Link>
            </p>
          </Card>
          <Card>
            <Clock showSeconds showSubtext />
          </Card>
          <Card>
            <FaClock />
            <h3>More stuff coming soon!</h3>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
