function SectionHeading({ children }) {
  return (
    <h2 className='text-sm font-bold uppercase tracking-widest text-secondary mb-10 sticky top-0 z-20 -mx-6 px-6 py-5 backdrop-blur-sm bg-primary/75 lg:sr-only'>
      {children}
    </h2>
  );
}

export default SectionHeading;
