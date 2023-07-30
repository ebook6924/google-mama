import { Link } from "react-router-dom";


const BookDetails = ({ book }) => {
  const { image, title, price,isbn13 } = book;
  console.log(isbn13)
  return (
    <>
   
    <Link to ={`/book/${isbn13}`}>
      <div className='overflow-hidden w-80 bg-red-200 relative transition duration-200 transform hover:-translate-y-2 rounded '>
      <img
        src={image}
        alt='book cover'
        className='object-cover w-full h-56 md:h-64 xl:h-80'
      />

      <div className='bg-black w-80 px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
        <p>{title}</p>
        <p className='mt-auto'>Price: {price}</p>
      </div>
    </div>
    </Link>
    </>
  );
};

export default BookDetails;
