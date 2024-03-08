function Button({ children, type, full }) {
  return (
    <button
      type={type}
      className='w-full inline-flex items-center justify-center p-4 mb-2 me-4 rounded-lg children-secondary border border-purple hover:bg-purple'
    >
      {children}
    </button>
  );
}

export default Button;
