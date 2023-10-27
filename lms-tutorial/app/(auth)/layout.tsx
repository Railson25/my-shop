const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-full flex justify-center items-center bg-gradient-to-r from-[#FC7766] via-[#F5DACF] to-[#045F68] ">
      <div className="">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
