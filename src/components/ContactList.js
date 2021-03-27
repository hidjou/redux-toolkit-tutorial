import { DeleteIcon, PhoneIcon, UserIcon } from '../assets/icons'

export default function ContactList({ contacts, loading, setContacts }) {
  const deleteContact = async (id) => {
    if (!window.confirm('Are you sure?')) return
    try {
      await fetch(`http://localhost:5000/contacts/${id}`, {
        method: 'DELETE',
      })

      setContacts(contacts.filter((c) => c.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="contacts-wrapper">
      {contacts?.length > 0 ? (
        contacts.map((contact) => (
          <div key={contact.id} className="contact-card group ">
            <img
              src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
              alt="headshot"
              className="contact-image"
            ></img>
            <div className="relative w-full p-2">
              <button
                className="delete-button"
                onClick={() => deleteContact(contact.id)}
              >
                <DeleteIcon />
              </button>

              <div className="flex items-center">
                <UserIcon className="mr-2" />
                <p className="name">{contact.name}</p>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="mr-2" />
                <p className="phone">{contact.phone}</p>
              </div>
            </div>
          </div>
        ))
      ) : contacts ? (
        <p>You have no contacts yet</p>
      ) : loading ? (
        <p>Loading..</p>
      ) : null}
    </div>
  )
}
