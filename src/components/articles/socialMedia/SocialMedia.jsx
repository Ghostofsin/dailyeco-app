"use client"

import Link from 'next/link';
import styles from './socialMedia.module.css'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const socialMediaList = [
  {
    title: "VK",
    path: "/images/social-media/VK.svg",
		link: "https://vk.com/share.php?url=URL_PAGE_TO_SHARE&Read%20this%20%20cool%20article" 
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
		{socialMediaList.map((item) => (
			<li key={item.title}>
				<Link href={item.link?.replace("URL_PAGE_TO_SHARE", `${process.env.ARTICLE_LINK_URL}${pathname}` )} target='_blank'>
				<Image
					src={item.path}
					width={28}
					height={28}
					alt={item.title}
				></Image>
				</Link>
				
				</li>
				))}
		</ul>

		{/* <Image
			src="/images/social-media/VK.svg"
			width={28}
			height={28}
			alt="VK"
		></Image>
		<Image
			src="/images/social-media/OK.svg"
			width={28}
			height={28}
			alt="OK"
		></Image>
		<Image
			src="/images/social-media/WhatsApp.svg"
			width={28}
			height={28}
			alt="WhatsApp"
		></Image>
		<Image
			src="/images/social-media/Telegram.svg"
			width={28}
			height={28}
			alt="Telegram"
		></Image> */}
	</div>
	)
}