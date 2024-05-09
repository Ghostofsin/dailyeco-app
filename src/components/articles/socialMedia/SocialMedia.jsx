"use client"

import Link from 'next/link';
import styles from './socialMedia.module.css'
import Image from 'next/image'
import { usePathname } from 'next/navigation';


const socialMediaList = [
  {
    title: "Linkedin",
    path: "https://www.svgrepo.com/show/303207/linkedin-icon-logo.svg",
		link: "https://www.linkedin.com/shareArticle?mini=true&url=URL_PAGE_TO_SHARE&title=Read%20this%20%20cool%20article"
  },
	{
    title: "Telegram",
    path: "/images/social-media/Telegram.svg",
		link: "https://t.me/share/url?url=URL_PAGE_TO_SHARE"
  },
	{
    title: "WhatsApp",
    path: "/images/social-media/WhatsApp.svg",
		link: "https://api.whatsapp.com/send?text=Read%20this%20%20cool%20article%20URL_PAGE_TO_SHARE" 
  },
	{
    title: "Facebook",
    path: "https://www.svgrepo.com/show/303114/facebook-3-logo.svg",
		link: "https://www.facebook.com/sharer/sharer.php?u=URL_PAGE_TO_SHARE"
  },

];


export default function SocialMedia() { 
	const pathname = usePathname()

	return (
		<div >
		<ul className={styles.networksBlockPics}>
		{socialMediaList.map((item) => {
			const link = `${process.env.ARTICLE_LINK_URL}${pathname}`;
			return (
			<li key={item.title}>
		
				<Link href={item.link.replace("URL_PAGE_TO_SHARE", link)} target='_blank'>
				<Image
					src={item.path}
					width={28}
					height={28}
					alt={item.title}
				></Image>
				</Link>
				
			</li>)
})}
		</ul>

	</div>
	)
}