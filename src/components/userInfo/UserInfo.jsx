import styles from './userInfo.module.css'
import Image from "next/image"

export default async function UserInfo({session}) { 

		return (
			<div className={styles.user}>
			<Image
				className={styles.userImage}
				src={session? session.user.image : "/images/noavatar.png"}
				alt="user image"
				width="40"
				height="40"
			/>
			<div className={styles.userDetail}>
				<span className={styles.username}>{session?.user.name}</span>
				{/* <span className={styles.userTitle}>Administrator</span> */}
			</div>
		</div>

		)
}