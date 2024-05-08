import Image from "next/image";
import styles from "./loginForm.module.css";
import { handleFacebookLogin, handleGoogleLogin } from "@/lib/actions/authActions";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className={styles.container}>
      <div className={styles.socialMediaForm}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={130}
          height={53}
        />
        </Link>
        <span>Login in to your account</span>
        <span>Don't have an account? Sign Up</span>
        <form
          className={styles.loginForm}
          action={handleGoogleLogin}
        >
          <button className={styles.socialLogin}>
            <Image
              priority
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google logo"
              width={20}
              height={20}
            />
            <span>Login with Google</span>
          </button>
        </form>

        <form
          className={styles.loginForm}
          action={handleFacebookLogin}
        >
          <button className={styles.socialLogin}>
            <Image
              priority
              src="https://www.svgrepo.com/show/343553/facebook-network-communication-internet-interaction.svg"
              alt="facebook logo"
              width={22}
              height={22}
            />
            <span>Login with Facebook</span>
          </button>
        </form>

        <div className={styles.secondBlock}>
          <div className={styles.grayLine}></div>
          <span>Or with email and password</span>
          <div className={styles.grayLine}></div>
        </div>
      </div>
    </div>
  );
}
