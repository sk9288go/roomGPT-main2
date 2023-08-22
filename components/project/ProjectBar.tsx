import React, { useState } from "react";

import Link from "next/link";

import styles from "../project/ProjectBar.module.css";
import classNames from "classnames";

import Image from "next/image";

import { useRouter } from "next/router";

const ProjectBar = () => {
  const router = useRouter();

  const [bar_close, setBar_close] = useState(false);

  return (
    <div className={classNames({ [styles.ProjectBar_wrap]: true, [styles.close]: bar_close })}>
      <div className={styles.ProjectBar_box}>
        <div className={styles.ProjectBar_head}>
          <i className="xi-file-o"></i>
          <p>My Project</p>
          <button
            onClick={() => {
              setBar_close(true);
            }}
          >
            <i className="xi-arrow-left"></i>
          </button>
        </div>
        <div className={styles.content_wrap}>
          <input type="text" placeholder="Title (30자 이내)" maxLength={30} />
          <textarea name="" id="" placeholder="Note (500자 이내)" maxLength={500}></textarea>
          <button className={styles.save_btn}>
            <i className="xi-save"></i>
          </button>
        </div>
      </div>

      <div className={styles.close_bar}>
        <div className={styles.close_bar_head}>
          <i className="xi-file-o"></i>
        </div>
        <div className={styles.close_bar_body}>
          <p>My Project</p>
          <button
            onClick={() => {
              setBar_close(false);
            }}
          >
            <i className="xi-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBar;
