import styles from "./navbarMobile.module.css";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import NavbarTitle from "./navbarTitle/NavbarTitle";
import UserInfo from "@/components/userInfo/UserInfo";
import { handleLogout } from "@/lib/actions/authActions";

export default function NavbarMobile({ session }) {
  return (
    <div className={styles.container}>
      <NavbarTitle />

      <div className={styles.userMenu}>
        <div className={styles.userInfo}>
          <UserInfo session={session} />
        </div>

        <form
          className={styles.form}
          action={handleLogout}
        >
          <button className={styles.logout}>Logout</button>
        </form>

      </div>
    </div>
  );
}
