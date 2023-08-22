import Link from "next/link";

import styles from "../auth/SignupModal.module.css";

import Image from "next/image";

const SignupModal = () => (
  <div className={styles.SignupModal_wrap}>
    <div className={styles.h2_wrap}>
      <h2>Sign up</h2>
      <p>회원가입</p>
    </div>

    <div className={styles.input_list}>
      <div className={styles.input_box}>
        <p>이름</p>
        <div className={styles.input_wrap}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
      </div>
      <div className={styles.input_box}>
        <p>Email</p>
        <div className={styles.input_wrap}>
          <input type="text" placeholder="계정" />
          <p>@Junglim.com</p>
        </div>
      </div>
      <div className={styles.input_box}>
        <p>직급</p>
        <input type="text" placeholder="직급" />
      </div>
      <div className={styles.input_box}>
        <p>부서</p>
        <input type="text" placeholder="부서" />
      </div>
      <div className={styles.input_box}>
        <p>비밀번호</p>
        <input type="password" placeholder="비밀번호" />
      </div>
      <div className={styles.input_box}>
        <p>비밀번호 확인</p>
        <input type="password" placeholder="비밀번호 확인" />
      </div>
    </div>

    <div className={styles.btn_wrap}>
      <button className={styles.White_btn}>취소</button>
      <button className={styles.Green_btn}>확인</button>
    </div>
  </div>
);

export default SignupModal;
