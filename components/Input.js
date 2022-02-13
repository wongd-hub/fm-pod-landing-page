import React, { useState } from 'react'
import { motion } from 'framer-motion'

const errorVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -100 }
}

export default function Input(props) {
    const [form, setForm] = useState('Email address')
    const [error, setError] = useState(false)

    function ValidateEmail(mail) {
        // Adapted from https://www.w3resource.com/javascript/form/email-validation.php
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (mail.match(mailformat)) {
            setError(false)
            return (true)
        } else {
            setError(true)
            return (false)
        }
    }

    return (
        <>
            <form 
                className="input-field"
                onSubmit={(e) => {
                    e.preventDefault()
                    ValidateEmail(form)
                }}
            >
                <input 
                    onBlur={() => {
                        if (form === '') {
                            setForm('Email address')
                        }
                    }}
                    onChange={e => setForm(e.target.value)}
                    onClick={e => {
                        if (form === "Email address") {
                            setForm('')
                        }
                    }}
                    type="text"
                    value={form}
                    />
                <button 
                    type="submit"
                >
                    Request Access
                </button>
            </form>
            <motion.p 
                className="form-error"
                variants={errorVariants}
                animate={error ? 'open' : 'closed'}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 150,
                    duration: 0.2
                }}
            >
                Oops! Please check your email
            </motion.p>
        </>

    )

}