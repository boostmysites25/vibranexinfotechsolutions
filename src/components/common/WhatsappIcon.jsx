import { IoLogoWhatsapp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { companyDetails } from '../../content/constant'

const WhatsappIcon = () => {
    return (
        <Link className='fixed bottom-16 right-4 z-20 hover:scale-105 hover:-translate-y-1 transition-all duration-300' to={`https://wa.me/${companyDetails.phone.replace('+', '')}?text=Hi%2C+I'm+interested+in+a+job+%7B${companyDetails.companyName}%7D+(Company))}`} target='_blank'>
            <div className="rounded-full p-3 bg-green-500">
                <IoLogoWhatsapp size={50} className="text-white" />
            </div>
        </Link>
    )
}

export default WhatsappIcon