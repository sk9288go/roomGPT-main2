import Link from "next/link";
import styles from "../auth/LoginModal.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
//import { useRouter } from "next/router";

const LoginModal = () => {
  //const router = useRouter();

  return (
    <div className={styles.LoginModal_wrap}>
      <div className={styles.h2_wrap}>
        <h2>Log in to JL-AI</h2>
        <p>정림 AI-이미지 생성 프로토타입에 로그인 해주세요</p>
      </div>
      <div className={styles.logo_wrap}>
        <Image src={logo} alt="" />
      </div>
      <div className={styles.input_wrap}>
        <input type="text" placeholder="Enter your email" />
        <input type="password" name="" id="" placeholder="Enter your password" />
      </div>
      <div className={styles.btn_wrap}>
        <button className={styles.White_btn}>SIGN UP</button>
        <button
          onClick={() => {
            //router.push("/project");
          }}
          className={styles.Green_btn}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
