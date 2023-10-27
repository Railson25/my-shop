const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-full flex justify-center items-center">
      {children}
    </main>
  );
};

export default AuthLayout;
