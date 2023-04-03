import whatsapp from '../aset/whatsapp.png'
import gmail from '../aset/gmail.png'

const Contact = () => {
    return (
        <section id='contact'>
            <div className='text-8xl font-bold md:px-52 sm:px-20 py-10 text-gray-500'>CONTACT</div>
            <div className='container mx-auto md:px-36 space-y-3 my-4 mb-5'>
                <div>
                    <div className='flex items-center space-x-3 font-semibold'>
                        <img src={whatsapp} alt="whatsapp" />
                        <div className=''>+62-822-6834-2730</div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center space-x-4 font-semibold'>
                        <img src={gmail} alt="gmail" />
                        <div className=''>frraiza056@gmail.com</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact