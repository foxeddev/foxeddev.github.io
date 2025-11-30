import { FaRegFrown } from "react-icons/fa";
import headerIconStyles from "@/styles/headerIcon.module.css";
import titleStyles from "@/styles/title.module.css";
import SplitText from "@/components/SplitText";
import Link from "next/link";

export default function Error() {
  return (
    <div>
      <header>
        <section>
          <FaRegFrown className={headerIconStyles.icon} />
          <div className={titleStyles.title}>
            <p className={titleStyles.tagline}>Error</p>
            <h1>
              <SplitText text="404" />
            </h1>
            <p className={titleStyles.subtitle}>
              This page could not be found.
              <br />
              <Link href={"/"}>Return to homepage</Link>
            </p>
          </div>
        </section>
      </header>
    </div>
  );
}
