import profile from '../aset/profile.png'
import instagram from '../aset/instagram.png'
import linkedin from '../aset/linkedin.png'
import github from '../aset/github.png'

const About = () => {
    return(
        <main>
            <div className='text-8xl font-bold md:px-52 sm:px-20 py-10 text-gray-500'>ABOUT</div>
            <div className='container mx-auto md:px-36 space-x-9 md:flex'>
                <div className='sm:mt-9'>
                    <div className=''>
                        <div className='px-6 flex justify-center'>
                              <img src={profile} alt="profile" />
                        </div>
                        <div className='bg-latar-image rounded-3xl -mt-36 sm:mx-24 md:mx-auto'>
                            <ul className='px-5 pt-40 pb-4 text-sm space-y-1'>
                                <li className=''>Find me on : <hr /></li>
                                <li className='flex space-x-2'><img src={instagram} alt="instagram" /> <span>Instagram</span> </li>
                                <li className='flex space-x-2'><img src={linkedin} alt="linkedin" /><span>linkedin</span></li>
                                <li className='flex space-x-2'><img src={github} alt="github" /><span>Github</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='md:w-2/3'>
                    <div className='py-3 text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-800'>
                        I’m Raiza Farhan. I live in <br /> Padang Indonesia
                    </div>
                    <div className='space-y-4'>
                        <p>Saat ini saya sedang menempuh pendidikan di salah satu Universitas Negeri di Kota Padang</p>
                        <p>Keseharian saya adalah kuliah dan belajar programming secara otodidak,saya menyukai hal yang berhubungan dengan teknologi dan perogramming, walaupun tidak mempunyai latar belakang pendidikan di dunia peogramming</p>
                        <p>Untuk saat ini saya sedang fokus belajar mengenai web-developer, yang mana ketertarikan ini bermula karena iseng .</p>
                    </div>
                </div>
                
            </div>     
        </main>
    )
}
export default About