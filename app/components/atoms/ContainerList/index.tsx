const ContainerList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <div className="py-4 sm:py-10">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerList;
