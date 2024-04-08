import { useState } from "react";
import { useForm } from "react-hook-form"

export default function Contact() {
    const { register, handleSubmit } = useForm()

    /************************************/

    const [feedBackMail, setFeedBackMail] = useState(null)
    let classFeedBack = ["hidden", "justify-center", "items-center", "p-6", "h-10", "my-5", "rounded-full", "bg-green-600", "duration-700"]
    let messageFeedBack = undefined

    if (feedBackMail === true) {
        classFeedBack = ["flex", "justify-center", "items-center", "p-6", "h-10", "my-5", "rounded-full", "bg-green-600", "duration-700"]
        messageFeedBack = "Votre message a bien été envoyé !"
    }
    else if (feedBackMail === false) {
        classFeedBack = ["flex", "justify-center", "items-center", "p-6", "h-10", "my-5", "rounded-full", "bg-red-600", "duration-700"]
        messageFeedBack = "Une erreur est survenue, votre message n'a pas été envoyé !"
    }

    async function postJSON(data) {
        try {
            const response = await fetch("http://localhost:3000/api/postemail/", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json()

            setFeedBackMail(true)
            console.log("Success:", result, "feedBack : ", feedBackMail)
        } catch (error) {

            setFeedBackMail(false)
            console.error("Error:", error, "feedBack : ", feedBackMail)
            console.log(classFeedBack)
        }
    }

    /************************************/

    const onSubmit = (data) => {
        console.log(data)
        postJSON(data);
    }

    return (
        <div id="contact-part" className="m-10 flex flex-col justify-center items-center lg:pb-48">
            <h2 className="text-5xl font-semibold my-16">Contact <span className="text-cyan-600">me</span></h2>
            <form className="w-full flex flex-col gap-5 lg:flex-row lg:w-3/4 xl:w-2/4 2xl:w-2/5" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center w-full gap-5 w-96">
                    <input placeholder="Fullname" className="h-14 w-full rounded-lg border-2 border-cyan-600 bg-sugii-blue pl-5 focus-visible:outline-none duration-300 focus-visible:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_1px_#08f,0_0_5px_#08f,0_0_5px_#08f]" {...register("fullName", { required: true, minLength: 2 })} />
                    <input placeholder="Email" className="h-14 w-full rounded-lg border-2 border-cyan-600 bg-sugii-blue pl-5 focus-visible:outline-none duration-300 focus-visible:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_1px_#08f,0_0_5px_#08f,0_0_5px_#08f]" {...register("email", { required: true, minLength: 5 })} />
                    <input placeholder="Phone number" className="h-14 w-full rounded-lg border-2 border-cyan-600 bg-sugii-blue pl-5 focus-visible:outline-none duration-300 focus-visible:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_1px_#08f,0_0_5px_#08f,0_0_5px_#08f]" {...register("phone", { required: true, minLength: 10, maxLength: 10 })} />
                    <input placeholder="Subject" className="h-14 w-full rounded-lg border-2 border-cyan-600 bg-sugii-blue pl-5 focus-visible:outline-none duration-300 focus-visible:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_1px_#08f,0_0_5px_#08f,0_0_5px_#08f]" {...register("subject", { required: true, minLength: 5 })} />
                </div>
                <div className="w-full flex flex-col items-center gap-5">
                    <textarea placeholder="Your Message" className="w-full rounded-lg border-2 border-cyan-600 bg-sugii-blue p-5 duration-300 focus-visible:outline-none focus-visible:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_1px_#08f,0_0_5px_#08f,0_0_5px_#08f]" name="" id="" cols="50" rows="8" {...register("message", { required: true, minLength: 2 })}></textarea>
                    <input className="pl-5 pr-5 h-12 rounded-full border-2 border-cyan-600 duration-700 hover:bg-cyan-600" type="submit" value="Send message" />
                </div>
            </form>
            <div className={classFeedBack.join(' ')}>
                {messageFeedBack}
            </div>
        </div>
    )
}