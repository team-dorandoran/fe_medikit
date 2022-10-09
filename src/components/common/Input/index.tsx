/* eslint-disable object-shorthand */
import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

interface InputWrapperProps {
  sufix?: ReactNode;
  prefix?: ReactNode;
}

const Input = (props: Props, { prefix, sufix }: InputWrapperProps) => {
  const { className } = props;
  return (
    <div className={styles.inputWrapper}>
      {prefix && prefix}
      <input
        {...props}
        className={`${styles.input} ${className && className}`}
      />
      {sufix && sufix}
    </div>
  );
};

export default Input;
