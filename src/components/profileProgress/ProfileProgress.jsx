import Image from 'next/image'
import styles from './profileProgress.module.css'
import Globegreen from "../../../public/images/profile/globegreen.svg"
import Globegrey from "../../../public/images/profile/globegrey.svg"
import Person from "../../../public/images/profile/person.png"

export default function ProfileProgress({rate}) { 
	return (
		<div
		className={styles.element}
		style={{
			background: `conic-gradient(#57cc99 ${rate}%, #9e9e9e ${rate}% 100%)`,
		}}
	>
		<div className={styles.elementRing}>
			{ rate >= 90 ? 
						<Image
						src={Globegreen}
						sizes="100vw"
						style={{
							width: '70%',
							height: 'auto',
						}}
						alt='progress globe'
					></Image> :
					<Image
					src={Globegrey}
					sizes="100vw"
					style={{
						width: '70%',
						height: 'auto',
					}}
					alt='progress globe'
				></Image>
				}

		</div>
	</div>
	)
}