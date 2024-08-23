"use client";

import styles from "./FalseButton.module.css";

interface Props {
  text: string;
  btnType: string;
  onClose?: () => void;
}

const FalseButton = ({ text, btnType, onClose }: Props) => {
  return (
    <div className={`${styles.btn} ${styles[btnType]}`} onClick={onClose}>
      {text}
    </div>
  );
};
export default FalseButton;
