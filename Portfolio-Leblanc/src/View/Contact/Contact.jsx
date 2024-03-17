import { useForm } from "react-hook-form"

export default function Contact() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="m-10 flex flex-col justify-center items-center">
            <h2 className="text-5xl font-semibold my-16">Contact <span className="text-cyan-600">me</span></h2>
            <form className="w-full flex flex-col gap-5 lg:flex-row lg:w-3/4 xl:w-2/4 2xl:w-2/5" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center w-full gap-5 w-96">
                    <input placeholder="Fullname" className="h-14 w-full rounded-lg border-2 border-cyan-600 bg-sugii-blue pl-5" {...register("fullName", { required: true, minLength: 2 })} />
                    <input placeholder="Email" className="h-14 w-full rounded-lg border-2 border-cyan-600 bg-sugii-blue pl-5" {...register("email", { required: true, minLength: 5 })} />
                    <input placeholder="Phone number" className="h-14 w-full rounded-lg border-2 border-cyan-600 bg-sugii-blue pl-5" {...register("phone", { required: true, minLength: 10, maxLength: 10 })} />
                    <input placeholder="Subject" className="h-14 w-full rounded-lg border-2 border-cyan-600 bg-sugii-blue pl-5" {...register("subject", { required: true, minLength: 5 })} />
                </div>
                <div className="w-full flex flex-col items-center gap-5">
                    <textarea placeholder="Your Message" className="w-full rounded-lg border-2 border-cyan-600 bg-sugii-blue p-5" name="" id="" cols="50" rows="8" {...register("message", { required: true, minLength: 2 })}></textarea>
                    <input className="pl-5 pr-5 h-12 rounded-full border-2 border-cyan-600 duration-700 hover:bg-cyan-600" type="submit" value="Send message" />
                </div>
            </form>
        </div>
    )
}