'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'
import { useTranslations } from 'next-intl';

export default function ContactForm() {
    const t = useTranslations("ContactPage.ContactForm");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Simulação de envio
        setStatus('sending')

        setTimeout(() => {
            console.log('Mensagem enviada:', formData)

            setStatus('success')

            // Limpar formulário
            setFormData({
                name: '',
                email: '',
                message: ''
            })

            // Remover mensagem após alguns segundos
            setTimeout(() => setStatus(''), 5000)

        }, 1500)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            {status === 'success' && (
                <div className={styles.successMessage}>{t("successMessage")}</div>
            )}

            <div className={styles.formGroup}>
                <label htmlFor="name">{t("fields.name")}</label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">{t("fields.email")}</label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">{t("fields.message")}</label>

                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'sending'}
            >
                 {status === 'sending'
                    ? t("buttons.sending")
                    : t("buttons.submit")
                }
            </button>

        </form>
    )
}