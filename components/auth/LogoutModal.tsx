import Link from "next/link";

import styles from "../auth/LogoutModal.module.css";

import Image from "next/image";
import logo from "../../public/images/logo.png";

const LogoutModal = () => (
  <div className={styles.LogoutModal_wrap}>
    <div className={styles.h2_wrap}>
      <h2>Log out</h2>
      <p>로그아웃 하시겠습니까?</p>
    </div>

    <div className={styles.logo_wrap}>
      <Image src={logo} alt="" />
    </div>

    <div className={styles.btn_wrap}>
      <button className={styles.White_btn}>아니오</button>
      <button className={styles.Green_btn}>LOG OUT</button>
    </div>
  </div>
);

export default LogoutModal;
