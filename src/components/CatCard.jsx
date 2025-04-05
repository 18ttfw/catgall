const CatCard = ({ image }) => (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      <img src={image} alt="Cat" className="w-full h-40 object-cover" />
    </div>
  );
  
  export default CatCard;
  