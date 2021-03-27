import { useEffect, useState } from 'react'

import ContactList from './components/ContactList'
import ContactInput from './components/ContactInput'

function App() {
  const [contacts, setContacts] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchContacts = async () => {
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5000/contacts')
      const data = await res.json()
      setContacts(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => fetchContacts(), [])

  return (
    <div className="container mx-auto">
      <h1 className="page-title">Contacts</h1>
      <ContactInput contacts={contacts} setContacts={setContacts} />
      {/* <input value={site} onChange={(e) => setSite(e.target.value)} />
      <button onClick={findSite}>Find</button> */}
      <ContactList
        contacts={contacts}
        setContacts={setContacts}
        loading={loading}
      />
    </div>
  )
}

export default App
