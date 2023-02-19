const FormContainer = ({ children }) => {
  return (
    <form className="bg-white shadow-md rounded-md gap-2 grid-cols-4 p-2 grid w-1/2 self-center">{children}</form>
  );
};

export default FormContainer;
