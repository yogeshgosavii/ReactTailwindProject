import React from 'react'
import communityIcon from '../assets/communityIcon.png'
import resolution from '../assets/help.png'
import message from '../assets/message.png'

function Services({className}) {
    const services = [
        {
            serviceIcon : resolution,
            serviceIconAlt : "Resolution center",
            serviceName : "Resolution center ",
            serviceInfo : "Resolve transaction or account issue"
        },
        {
            serviceIcon : communityIcon,
            serviceIconAlt : "Ask community",
            serviceName : "Ask the Community ",
            serviceInfo : "Find answers or join the conversation"
        },
        {
            serviceIcon : message,
            serviceIconAlt : "Message Center",
            serviceName : "Message Center ",
            serviceInfo : "Send,recieve and view your paypal messages"
        }
    ]
  return (
    <div className={`${className} flex gap-8 w-full flex-col md:flex-row`}>
        {
            services.map((service)=>{
               return(
                <div key={service.serviceName} className={`cursor-pointer mx-auto w-full justify-center sm::max-w-[22rem] md:w-1/${services.length} bg-white rounded-xl border flex items-center border-gray-100 overflow-hidden shadow-sm md:shadow-md lg:shadow-xl px-5 py-2`}
                style={{boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"}}>
                    <div className="flex  md:text-center xl:text-start flex-col sm:flex-col lg:flex-row xl:flex-row gap-4 items-center">
                        <div className="flex items-center h-fit bg-gray-100 rounded-full p-5">
                            <img className=" object-cover w-12 " src={service.serviceIcon} alt={service.serviceIconAlt} />
                        </div>
                        <div className=" text-center  md:text-center lg:text-start">
                            <div className="  font-semibold">{service.serviceName}</div>
                            <p className=" text-gray-700">{service.serviceInfo}</p>
                        </div>
                    </div>
                </div>
               )
            })
        }
    </div>
  )
}

export default Services