import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

const WhatsApp = () => {
    return (
        <div className="flex justify-center items-center my-10">
            <a
                href="https://wa.me/+2348105826279"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 px-6 py-3 text-white text-lg font-semibold rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg hover:from-emerald-500 hover:to-green-500 transition-all duration-300 ease-in-out
                  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/20 before:rounded-full before:opacity-0 before:transition-opacity before:duration-300 before:ease-in-out hover:before:opacity-100"
            >
                <FaWhatsapp className="text-2xl" />
                Speak with our consultant
            </a>
        </div>
    )
}

export default WhatsApp