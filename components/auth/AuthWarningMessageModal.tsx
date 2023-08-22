import Link from "next/link";

import styles from "../auth/AuthWarningMessageModal.module.css";

import Image from "next/image";
import logo from "../../public/images/Error Logo.png";

const AuthWarningMessageModal = () => {
  return (
    <div className={styles.AuthWarningMessageModal_wrap}>
      <div className={styles.h2_wrap}>
        <h2>Something wrong...</h2>
      </div>

      <div className={styles.x_img_wrap}>
        <Image src={logo} alt="" />
      </div>

      <p className={styles.Error_p}>
        오류가 있습니다. <br />
        다시 시도해주세요
      </p>

      <button className={styles.White_btn}>확인</button>
    </div>
  );
};

export default AuthWarningMessageModal;
