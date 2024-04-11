import ContactCard from '../../Components/ContactCard/ContactCard'
import linkedinLogo from './icons/linkedin.png'
import githubLogo from './icons/github.png'
import facebookLogo from './icons/facebook.png'
import mailLogo from './icons/mail.png'
import dataContact from './data/contact.json'

export default function ContactLink() {
    return (
        <div id="contact-part" className='flex flex-col justify-center items-center m-20'>
            <h2 className="text-5xl font-semibold my-16">Contact <span className="text-cyan-600">me</span></h2>
            <div className='flex flex-row flex-wrap justify-center items-center gap-5 p-3 rounded-xl'>
                {/* {dataContact.map((contact, index) => {
                    return (
                        <ContactCard key={index} title={contact.title} icon={contact.icon} link={contact.link} alt={contact.alt} />
                    )
                })} */}
                <ContactCard title="Linkedin" icon={linkedinLogo} link="https://www.linkedin.com/in/leblanc-sbt/" alt="linkedin-logo" />
                <ContactCard title="Github" icon={githubLogo} link="https://github.com/sugiilol" alt="github-logo" />
                <ContactCard title="Facebook" icon={facebookLogo} link="https://www.facebook.com/sebastien.leblanc.353250" alt="facebook-logo" />
                <ContactCard title="Mail" icon={mailLogo} link="mailto:leblanc.sbt@gmail.com" alt="mail-logo" />
            </div>
        </div>
    )
}