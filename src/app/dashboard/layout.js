import Footer from "@/components/footer/MainFooter";
import styles from "./dashboard.module.css";
import DashboardFooter from "@/components/dashboard/dashboardFooter/DashboardFooter";
import SideBar from "@/components/dashboard/sidebar/Sidebar";
import Navbar from "@/components/dashboard/navbar/Navbar";
import NavbarMobile from "@/components/dashboard/navbar/NavbarMobile";
import { auth } from "@/auth";

export default async function Layout({ children }) {

  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar session={session}/>
      </div>

      <div className={styles.content}>
        
        <div className={styles.navbar}>
        <Navbar />
        </div>
        <div className={styles.navbarMobile}>
        <NavbarMobile session={session} />
        </div>
        
        {children}

        <DashboardFooter />

      </div>
    </div>
  );
}
