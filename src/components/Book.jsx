import { useLoaderData, useNavigation, } from "react-router-dom";
import BookDetails from "./BookDetails";
import { useState } from "react";
import Spiner from "./Spiner";


const Book = () => {
  const [openData,setOpendata] = useState(false)
  const book = useLoaderData()
  console.log(book.books)

 const navigation = useNavigation()
 // console.log(navigation.state)
  if (navigation.state === 'loading') {
    return <Spiner></Spiner>
  }


const handleClikData = ()=>{
  setOpendata(true)
}
  return (
 <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-20 md:px-12 mt-12 mb-6" >
      {
        book.books.slice(0,openData?20:9).map(book=><BookDetails
        key={book.isbn13}
        book={book}
        ></BookDetails>)
      }
      
    </div>
    {!openData&&
     <button onClick={()=>handleClikData(true)} className="ml-[41%] btn btn-secondary mb-6 ">Secondary</button>
    }

  </>
  );
};

export default Book;