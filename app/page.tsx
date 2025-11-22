"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import { SiGithub, SiDiscord, SiGmail, SiModrinth } from "react-icons/si";
import { FaClock } from "react-icons/fa";
import FoxFaceplant from "@/public/img/fox_faceplant.gif";
import Clock from "@/components/Clock";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";
import headerIconStyles from "@/styles/headerIcon.module.css";
import titleStyles from "@/styles/title.module.css";
import cardStyles from "@/styles/card.module.css";
import SplitType from "split-type";

export default function Home() {
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
            <h1
              ref={(el) => {
                if (el) new SplitType(el, { split: "chars" });
              }}
            >
              FOXED
            </h1>
            <p className={titleStyles.subtitle}>
              I&apos;m a Minecraft data pack creator and web developer from
              Germany.
            </p>
          </div>
        </section>
      </header>
      <main>
        <section className="grid">
          <Link
            className={cardStyles.card}
            href={"https://modrinth.com/user/foxeddev"}
            target="_blank"
          >
            <SiModrinth />
            <h3>
              Modrinth: <mark>FoxedDev</mark>
            </h3>
          </Link>
          <Link
            className={cardStyles.card}
            href={"https://github.com/foxeddev"}
            target="_blank"
          >
            <SiGithub />
            <h3>
              GitHub: <mark>FoxedDev</mark>
            </h3>
          </Link>
          <div
            className={cardStyles.card}
            style={{ cursor: "pointer" }}
            onClick={() => copy("foxeddev")}
          >
            <SiDiscord />
            <h3>
              Discord: <mark>FoxedDev</mark>
            </h3>
          </div>
          <Image
            className={cardStyles.card}
            src={FoxFaceplant}
            alt={""}
            style={{ gridRowEnd: `span 2` }}
            unoptimized
          />
          <Link
            className={cardStyles.card}
            href={"mailto:foxed.dev@gmail.com"}
            target="_blank"
          >
            <SiGmail />
            <h3>
              <mark>E-Mail</mark>
            </h3>
          </Link>
          <div className={`${cardStyles.card} ${cardStyles.left}`}>
            <h3>🌱 I&apos;m currently learning</h3>
            <p>
              React <br />
              NextJS <br />
              TailwindCSS <br />
            </p>
          </div>
          <div className={`${cardStyles.card} ${cardStyles.left}`}>
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
              </Link>{" "}
              (
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
          </div>
          <div className={cardStyles.card}>
            <Clock showSeconds showSubtext />
          </div>
          <div className={cardStyles.card}>
            <FaClock />
            <h3>More stuff coming soon!</h3>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
