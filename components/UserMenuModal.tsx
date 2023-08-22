import Link from 'next/link';

import styles from "../component/UserMenuModal.module.css";
import classNames from 'classnames';

import Image from 'next/image'
import logout from '../public/images/logout.png'
import settings from '../public/images/settings.png'

const UserMenuModal = () => {
	return(
		<div className={styles.UserMenuModal_wrap}>
			<button>
				<i className='xi-cog'></i>
				My Profile
			</button>
			<button>
				<i className='xi-log-out'></i>
				Log-out
			</button>
		</div>
	)
}

export default UserMenuModal;