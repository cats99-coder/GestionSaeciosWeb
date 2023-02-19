import Header from "../components/Header";

const AppLayout = ({ children, tittle, toolbar }) => {
  return (
    <>
      <Header />
      <main className="px-3 py-2 flex flex-col space-y-3 bg-slate-200 grow">
        <div className="text-blue text-md">{tittle}</div>
        {toolbar}
        {children}
      </main>
    </>
  );
};

export default AppLayout;
