import Link from 'next/link';

import styles from "../auth/ProfileModal.module.css";

import Image from 'next/image'

const ProfileModal = () => (
	<div className={styles.ProfileModal_wrap}>
		<div className={styles.h2_wrap}>
			<h2>Profile</h2>
			<p>Welcome, Junglim Kim</p>
		</div>

		<div className={styles.input_list}>
			<div className={styles.input_box}>
				<p>First Name</p>
				<input type="text" placeholder='First Name'/>
			</div>
			<div className={styles.input_box}>
				<p>Last Name</p>
				<input type="text" placeholder='Last Name'/>
			</div>
			<div className={styles.input_box}>
				<p>Email</p>
				<input type="text" placeholder='Email'/>
			</div>
			<div className={styles.input_box}>
				<p>직급</p>
				<input type="text" placeholder='직급'/>
			</div>
			<div className={styles.input_box}>
				<p>부서</p>
				<input type="text" placeholder='부서'/>
			</div>
			<div className={styles.input_box}>
				<p>변경 전 비밀번호</p>
				<input type="password" placeholder='변경 전 비밀번호'/>
			</div>
			<div className={styles.input_box}>
				<p>변경 후 비밀번호</p>
				<input type="password" placeholder='변경 후 비밀번호'/>
			</div>
			<div className={styles.input_box}>
				<p>변경 후 비밀번호 확인</p>
				<input type="password" placeholder='변경 후 비밀번호 확인'/>
			</div>
		</div>

		<div className={styles.btn_wrap}>
			<button className={styles.White_btn}>취소</button>
			<button className={styles.Green_btn}>확인</button>
		</div>
	</div>
);

export default ProfileModal;