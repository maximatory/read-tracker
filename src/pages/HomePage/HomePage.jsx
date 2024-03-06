import { Link, Outlet } from "react-router-dom"
import styles from './HomePage.module.scss'

export default function HomePage() {
  return (
    <main className={styles.main}>
      <aside className={styles.sidebar}>
        <nav>
          <ul>
            <li>
              <Link to="/search">Поиск</Link>
            </li>
            <li>
              <Link to="/library">Библиотека</Link>
            </li>
            <li>
              <Link to="/wishlist">Вишлист</Link>
            </li>
            <li>
              <Link to="/statistics">Статистика</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <section className={styles.content}>
        <Outlet/>
      </section>
    </main>
  )
}
