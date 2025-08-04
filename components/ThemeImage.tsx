import styles from "./ThemeImage.module.css";
import Image, { ImageProps, StaticImageData } from "next/image";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: StaticImageData;
  srcDark: StaticImageData;
};

export default function ThemeImage(props: Props) {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image src={srcLight} className={styles.imgLight} {...rest} />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image src={srcDark} className={styles.imgDark} {...rest} />
    </>
  );
}
