import ContactCard from '../../Components/ContactCard/ContactCard'

export default function ContactLink() {
    return (
        <div id="contact-part" className='flex flex-col justify-center items-center mb-12 m-10'>
            <h2 className="text-5xl font-semibold my-16">Contact <span className="text-cyan-600">me</span></h2>
            <div className='flex flex-row justify-center items-center gap-5'>
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
            </div>
        </div>
    )
}