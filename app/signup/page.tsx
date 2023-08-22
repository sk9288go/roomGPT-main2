"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState } from "react";
import Login from "../../components/auth/LoginModal";
import styles from "../../components/auth/SignupModal.module.css";
import logo from "../../public/logo.png";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  const router = useRouter(); // <- Use the useRouter hook

  const handleCancel = () => {
    router.push("./login"); // Navigate to signin.tsx
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-40 max-w-8xl">
      <Header />
      <main className="flex justify-center flex-1 w-full px-4 mt-20 sm:mt-20 background-gradient">
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
            <button onClick={handleCancel} className={styles.White_btn}>
              취소
            </button>
            <button className={styles.Green_btn}>확인</button>
          </div>
        </div>
      </main>
    </div>
  );
}
