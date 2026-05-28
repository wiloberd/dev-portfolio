'use client'

import { useState } from 'react'
import { Link, usePathname } from '@/i18n/navigation';
import styles from './Navigation.module.css'
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '../LocalSwitcher/LocalSwitcher';

export default function Navigation() {
  const t = useTranslations("Navigation");

  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          {t("logo")}
        </Link>

        <div className={styles.containerMenuSwitcherLocale}>
        {/* Bouton burger pour mobile */}
        <button 
          className={styles.burger}
          onClick={toggleMenu}
          aria-label={t("mobileMenu")}
        >
          <span className={isOpen ? styles.burgerOpen : ''}></span>
          <span className={isOpen ? styles.burgerOpen : ''}></span>
          <span className={isOpen ? styles.burgerOpen : ''}></span>
        </button>

          {/* Menu */}
          <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
            <li>
              <Link 
                href="/" 
                className={pathname === '/' ? `${styles.link} ${styles.active}` : styles.link}
                onClick={closeMenu}
              >
                {t("menu.home")}
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className={pathname.startsWith('/projects') ? `${styles.link} ${styles.active}` : styles.link}
                onClick={closeMenu}
              >
                {t("menu.projects")}
              </Link>
            </li>
            <li>
              <Link 
                href="/formations" 
                className={pathname.startsWith('/formations') ? `${styles.link} ${styles.active}` : styles.link}
                onClick={closeMenu}
              >
                {t("menu.formations")}
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={pathname === '/about' ? `${styles.link} ${styles.active}` : styles.link}
                onClick={closeMenu}
              >
                {t("menu.about")}
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={pathname === '/contact' ? `${styles.link} ${styles.active}` : styles.link}
                onClick={closeMenu}
              >
                {t("menu.contact")}
              </Link>
            </li>
          </ul>
          <div className={styles.swictherContainer}>
            {  !isOpen &&  <LocaleSwitcher /> }
          </div>
        </div>
      </div>
    </nav>
  )
}

