import React from 'react'
import { CSSProperties, ReactNode } from "react";
import classNames from 'classnames';

import styles from "./Section.module.css";

export type SectionProps = {
  className?: string;
  children: ReactNode;
  padding?: string;
  maxWidth?: string;
  style?: CSSProperties;
};

export const Section = ({
  children,
  className,
  padding = "0px",
  maxWidth = "1280px",
  style = {},
}: SectionProps) => {
  return (
    <div
      className={classNames(styles.main, className)}
      style={{
        ...style,
        paddingTop: padding,
        paddingBottom: padding,
      }}
    >
      <div className={styles.inner} style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
}

export default Section
