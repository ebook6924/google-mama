import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Spiner from "./Spiner";

const BookInfo = () => {
  const bookData = useLoaderData();
  const { image, title, price } = bookData;


  const navigation = useNavigation()
 // console.log(navigation.state)
  if (navigation.state === 'loading') {
    return <Spiner></Spiner>
  }

  return (

    <div>
      <div className="my-container mt-12 mb-6">
        <div className="flex flex-col max-w-screen-lg overflow-hidden border-2 border-teal-400 px-2 py-2 lg:flex-row sm:mx-auto">
         
          <div className=" lg:w-1/2 h-96">
            <img
              src={image}
              alt="book cover"
              className="object-cover w-full  lg:h-full"
            />
          </div>
         
          <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="badge">Brand new</p>
            </div>
            <h5 className="mb-3 text-3xl font-bold leading-none sm:text-4xl">
              {title}
            </h5>
            <div className="flex gap-5 mt-8 items-center">
              <p className="items-center font-extrabold text-gray-600 ">
                Price: {price}
              </p>
            </div>
            <Link to='/order'>
            <button className="btn btn-neutral mt-12">buy now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
