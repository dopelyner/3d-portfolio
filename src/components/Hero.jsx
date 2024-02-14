import { motion } from 'framer-motion'
import { styles } from '../styles'
import { StarsCanvas } from './canvas'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-center items-center gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#A27B5C]'>Tiago Lino</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <p className='flex justify-end mb-6 italic'>
              aka
              <a
                href='https://github.com/dopelyner'
                target='_blank'
                className='text-[#A27B5C] pl-2 hover:underline hover:scale-105'
              >
                dopelyner
              </a>
            </p>
            Fullstack developer, passionate about tech
            <br className='sm:block hidden' />
            and web3 enthusiast.
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
