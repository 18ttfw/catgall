const FilterBar = ({ setFilter }) => (
    <div className="mb-4">
      <button onClick={() => setFilter("all")} className="p-2 bg-blue-500 text-white rounded-md">
        All Cats
      </button>
    </div>
  );
  
  export default FilterBar;
  