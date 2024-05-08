import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./login.module.css";
import Image from "next/image";
import MainFooter from "@/components/footer/MainFooter";
import Forest from "../../../public/images/backgroung/forest-factory.png"

export const metadata = {
  title: "Log in",
  description: "Login to the best site about eco life",
};

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.loginBlock}>
        <LoginForm />
      </div>

      <div className={styles.anotherBlock}>

        <div className={styles.paragraph}>
          <h1 className={styles.title1}>Earth concerns </h1>
          <h2 className={styles.title2}>everyone</h2>
        </div>

        <footer className={styles.footer}>
          {/* <div className={styles.bottomBackground}></div> */}
          <div style={{ display: 'flex', flexDirection: 'column'}}> 
            <Image 
            className={styles.headerImage}
              src={Forest}     
              sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: 'auto',
              }}

              alt="head article forest pic"
            ></Image>
          </div>

          <MainFooter bgColor={"#133145"} color={"#dffae2"}/>
        </footer>
      

      </div>
    </div>
  );
}
