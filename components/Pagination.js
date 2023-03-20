const Pagination = ({ totalLibs, libsPerPage, setLibsPerPage }) => {
  const handleLoadMore = () => {
    setLibsPerPage(libsPerPage + 9);
  };

  //   console.log("called");

  return (
    <div className="flex items-center justify-center mt-4 py-4">
      {libsPerPage < totalLibs && (
        <button
          onClick={() => handleLoadMore()}
          className="btn btn-outline btn-block"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Pagination;
