import Image from 'next/image';
import styles from './sideBar.module.css'
import {
  MdDashboard,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { GiFootprint, GiNewspaper } from "react-icons/gi";
import { TbMan } from "react-icons/tb";

import MenuLink from './menuLink/MenuLink';
import { handleLogout } from '@/lib/actions/authActions';
import UserInfo from '@/components/userInfo/UserInfo';


export const menuItems = [
  {
    title: "My profile",
    path: "/dashboard/profile",
    icon: <TbMan />,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Footprint",
    path: "/dashboard/footprint",
    icon: <GiFootprint />,
  },
  {
    title: "Challenges",
    path: "/dashboard/challenges",
    icon: <BiTask />,
  },
  {
    title: "Blog",
    path: "/dashboard/blog",
    icon: <GiNewspaper />,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: <MdOutlineSettings />,
  },
  {
    title: "Help",
    path: "/dashboard/help",
    icon: <MdHelpCenter />,
  },
];

export default function SideBar({session}) { 
	return (
		<div className={styles.container}>

      <UserInfo session={session}/>

      <ul className={styles.list}>
        {menuItems.map((category) => (
          <li key={category.title}>
            <MenuLink
                item={category}
                key={category.title}
              />
          </li>
        ))}
      </ul>

      <form  className={styles.form}
			action={handleLogout}
			>
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
      
    </div>

	)
}