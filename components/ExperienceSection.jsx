export default function ExperienceSection() {
  return (
    <div>
      <section
        className='px-6 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32'
        id='about'
      >
        <h2 className='text-4xl font-extrabold mb-4 text-secondary'>
          Experience
        </h2>
        <div className='grid md:grid-cols-8 items-center md:gap-28'>
          <div className='place-self-center mb-6 md:mb-0 md:col-span-2'>
            <h1> hello</h1>
          </div>
          <div className='place-self-center text-center md:text-left h-full text-secondary md col-span-6'>
            <p className='text-base lg:text-md text-pretty'>
              Welcome to my digital space! I'm Jason Utama, a passionate UI
              Developer based in Atlanta, GA. With a proven track record of
              accelerating project timelines and enhancing user experiences, I
              thrive on crafting digital solutions that seamlessly blend
              innovation and functionality. Specializing in ReactJS and NextJS,
              I bring a unique blend of technical expertise and creative flair
              to every project. Explore my portfolio to discover the stories
              behind the code and the impact of my journey in the realm of UI
              development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
