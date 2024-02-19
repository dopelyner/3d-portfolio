import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'

import { github } from '../assets'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='relative orange-gradient p-5 shadow-card rounded-2xl xs:w-[240px] sm:w-[360px] w-full min-h-[480px]'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-fill rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <TagContainer name={name} tags={tags} />

        {/* <div className='absolute right-8 bottom-5 flex flex-wrap gap-2'>
          {tags.map(tag => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div> */}
      </Tilt>
    </motion.div>
  )
}

const TagContainer = ({ name, tags }) => {
  return (
    <div className='absolute right-8 bottom-5 mt-2 justify-end flex flex-wrap-reverse gap-2'>
      {tags.map(tag => (
        <div className='bg-secondary rounded-lg px-2 py-1/2'>
        <p key={`${name}-${tag.name}`} className={` text-[14px] text-primary`}>
          #{tag.name}
        </p>
        </div>
      ))}
    </div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          My portfolio website highlights my experience with a variety of
          technologies. This app is designed to help myself as a developer in
          order to improve my skills by providing a collection of examples that
          demonstrate my proficiency in problem-solving, adaptability to various
          technologies, and project management skills. I've also been applied my
          coding skills to real-world projects that require innovative solutions
          within the context of project management.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects')
