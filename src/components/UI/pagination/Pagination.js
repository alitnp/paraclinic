import { persian } from "asset/helpers/persianTools";

const Pagination = ({ setPage, pageIndex, totalPages }) => {
  if (totalPages < 2) return null;

  const pageClasses =
    "h-10  w-10 rounded-lg  flex bg-p-bg-color justify-center items-center px-1 mx-1 font-bold cursor-pointer select-none  hover:bg-p-gray border";

  return (
    <div className="w-full mt-6 mb-12 ">
      <div className="flex items-center justify-center w-full mb-2 mt-7">
        {totalPages > 5 && (
          <>
            {pageIndex > 3 && (
              <div
                className={pageClasses}
                onClick={() => {
                  setPage(1);
                }}
                style={{ marginLeft: "25px" }}
              >
                {persian(1)}
              </div>
            )}
          </>
        )}
        {totalPages > 4 && (
          <>
            {pageIndex > totalPages - 2 && (
              <div
                className={pageClasses}
                onClick={() => {
                  setPage(totalPages - 4);
                }}
              >
                {persian(totalPages - 4)}
              </div>
            )}
          </>
        )}
        {totalPages > 3 && (
          <>
            {pageIndex === totalPages && (
              <div
                className={pageClasses}
                onClick={() => {
                  setPage(totalPages - 3);
                }}
              >
                {persian(totalPages - 3)}
              </div>
            )}
          </>
        )}
        {pageIndex > 2 && (
          <div
            className={pageClasses}
            onClick={() => {
              setPage(pageIndex - 2);
            }}
          >
            {persian(pageIndex - 2)}
          </div>
        )}
        {pageIndex > 1 && (
          <div
            className={pageClasses}
            onClick={() => {
              setPage(pageIndex - 1);
            }}
          >
            {persian(pageIndex - 1)}
          </div>
        )}
        <div
          className={`${pageClasses} border border-p-primary text-p-primary bg-p-bg-color`}
        >
          {persian(pageIndex)}
        </div>
        {pageIndex < totalPages && (
          <div
            className={pageClasses}
            onClick={() => {
              setPage(pageIndex + 1);
            }}
          >
            {persian(pageIndex + 1)}
          </div>
        )}
        {pageIndex < totalPages - 1 && (
          <div
            className={pageClasses}
            onClick={() => {
              setPage(pageIndex + 2);
            }}
          >
            {persian(pageIndex + 2)}
          </div>
        )}
        {totalPages > 3 && (
          <>
            {pageIndex === 1 && (
              <div
                className={pageClasses}
                onClick={() => {
                  setPage(4);
                }}
              >
                {persian(4)}
              </div>
            )}
          </>
        )}
        {totalPages > 4 && (
          <>
            {pageIndex < 3 && (
              <div
                className={pageClasses}
                onClick={() => {
                  setPage(5);
                }}
              >
                {persian(5)}
              </div>
            )}
          </>
        )}

        {totalPages > 5 && (
          <>
            {pageIndex < totalPages - 2 && (
              <div
                className={pageClasses}
                onClick={() => {
                  setPage(totalPages);
                }}
                style={{ marginRight: "25px" }}
              >
                {persian(totalPages)}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
