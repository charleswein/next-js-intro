import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from "next/link";
const Home: NextPage = () => {
  return (
      <div className={styles.container}>
          <Link href='/blog'>
              Blog
          </Link>
          <Link href='/dog-image'>
              Dog Images
          </Link>
      </div>
  )
}

export default Home
