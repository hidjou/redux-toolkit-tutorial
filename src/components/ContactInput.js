import { useRef, useState } from 'react'
import { LoadingSpinner } from '../assets/icons'
import { useDispatch } from 'react-redux'

import { addContact } from '../store/contactSlice'

export default function ContactInput() {
  const nameInputRef = useRef()
  const phoneInputRef = useRef()

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const submitForm = async (event) => {
    event.preventDefault()

    const name = nameInputRef.current.value
    const phone = phoneInputRef.current.value

    if (name === '' || phone === '') return

    setLoading(true)

    try {
      const res = await fetch('http://localhost:5000/contacts', {
        method: 'POST',
        body: JSON.stringify({ name, phone }),
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await res.json()

      nameInputRef.current.value = ''
      phoneInputRef.current.value = ''

      dispatch(addContact(data))
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <div className="contact-form">
          <div className="input-group">
            <input
              type="text"
              className="rounded-l-lg contact-input"
              placeholder="name"
              ref={nameInputRef}
              disabled={loading}
            />
            <input
              type="text"
              className="rounded-r-lg contact-input"
              placeholder="phone"
              ref={phoneInputRef}
              disabled={loading}
            />
          </div>
          <button type="submit" className="add-button" disabled={loading}>
            {loading && <LoadingSpinner className="spinner" />}
            {loading ? 'Adding' : 'Add'}
          </button>
        </div>
      </form>
    </>
  )
}
