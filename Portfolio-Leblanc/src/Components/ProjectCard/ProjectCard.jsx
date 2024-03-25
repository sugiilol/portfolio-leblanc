export default function ProjectCard(props){
    console.log(props)
    return(
        <div>
           <a href="https://fullmoon-shop.com/fr/" target="_blank">
                <div className=" flex justify-center items-center w-72 h-96 rounded-2xl ">
                    <div className={`w-full h-full rounded-2xl bg-contain bg-no-repeat duration-700 hover:scale-105 hover:overflow-hidden`} style={{backgroundImage: 'url(' + props.imageUrl + ')', }}>
                        <div className="w-full h-full rounded-2xl duration-700 hover:bg-black/50">

                        </div>
                    </div>
                </div>
            </a>    
        </div>      
    )
}