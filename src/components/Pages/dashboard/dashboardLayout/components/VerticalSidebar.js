const VerticalSidebar = ({ children }) => {
  return (
    <aside className="flex-col hidden w-32 py-2 my-4 ml-4 rounded-md shadow-md md:flex bg-p-primary">
      {children}
    </aside>
  );
};

export default VerticalSidebar;
