'use client';

import {useState} from 'react';
import Image from 'next/image';
import {useRouter, usePathname} from '@/i18n/navigation';
import {useLocale} from 'next-intl';
import styles from './LocaleSwitcher.module.css';

const locales = [
  {code: 'pt', label: 'Português', flag: '/flags/br.svg'},
  {code: 'en', label: 'English', flag: '/flags/us.svg'},
  {code: 'fr', label: 'Français', flag: '/flags/fr.svg'}
];

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [open, setOpen] = useState(false);

  const current = locales.find(l => l.code === locale);

  function changeLocale(code) {
    router.replace(pathname, {locale: code});
    setOpen(false);
  }

  return (
    <div className={styles.wrapper}>
      
      {/* botão atual */}
      <button className={styles.button} onClick={() => setOpen(!open)}>
        <Image
          src={current.flag}
          width={20}
          height={14}
          alt={current.label}
        />
        {/* <span>{current.label}</span> */}
        <span className={styles.arrow}>{open ? '▲' : '▼'}</span>
      </button>

      {/* dropdown */}
      {open && (
        <div className={styles.dropdown}>
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => changeLocale(l.code)}
              className={`${styles.item} ${
                l.code === locale ? styles.active : ''
              }`}
            >
              <Image
                src={l.flag}
                width={20}
                height={14}
                alt={l.label}
              />
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}