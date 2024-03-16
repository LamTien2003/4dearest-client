import { PropsWithChildren } from "react";

import styles from "./Section.module.css";

interface SectionProps extends PropsWithChildren {}
const Section = ({ children }: SectionProps) => {
  return <section className={styles["wrapper"]}>{children}</section>;
};

export default Section;
