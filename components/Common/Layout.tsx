import Breadcrumb from './Breadcrumb';

const Layout = ({ children, currentPage }: any) => {
  return (
    // <div className="max-w-6xl border border-yellow-700  mx-auto px-4 sm:px-6 py-12">
    <div className="max-w-6xl    px-4 sm:px-6 ">
      <header className="mb-8  flex justify-between items-center">
        <div>{/* Other header content */}</div>
        {/* Breadcrumb */}
        <div className="text-right">
          <Breadcrumb currentPage={currentPage} />
        </div>
      </header>
      <main>{children}</main>
      {/* Footer and other components */}
    </div>
  );
};

export default Layout;
