import ContactCard from '../../Components/ContactCard/ContactCard'
import dataContact from './data/contact.json'

console.log(dataContact)

export default function ContactLink() {
    return (
        <div id="contact-part" className='flex flex-col justify-center items-center m-20'>
            <h2 className="text-5xl font-semibold my-16">Contact <span className="text-cyan-600">me</span></h2>
            <div className='flex flex-row flex-wrap justify-center items-center gap-5 p-3 rounded-xl'>
                {dataContact.map((contact, index) => {
                    return (
                        <ContactCard key={index} title={contact.title} icon={contact.icon} link={contact.link} alt={contact.alt} />
                    )
                })}
            </div>
        </div>
    )
}