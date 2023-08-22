"use client";

// this works in pages directory as well
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
//import { useRouter } from "next/router"; // <- Import useRouter
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState } from "react";
import Login from "../../components/auth/LoginModal";
import styles from "../../components/auth/LoginModal.module.css";
import logo from "../../public/logo.png";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  const router = useRouter(); // <- Use the useRouter hook

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-40 max-w-8xl">
      <Header />
      <main className="flex justify-center flex-1 w-full px-4 mt-20 sm:mt-20 background-gradient">
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
            <button
              onClick={() => router.push("./signup")} // <- Navigate to signup.tsx on click
              className={styles.White_btn}
            >
              SIGN UP
            </button>
            <button
              onClick={() => router.push("./dream")} // <- Navigate to ./dream/page.tsx on click
              className={styles.Green_btn}
            >
              LOGIN
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
