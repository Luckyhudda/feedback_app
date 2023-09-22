import { createContext, useState } from "react";

const ReviewContext = createContext();

// eslint-disable-next-line react/prop-types
export const ReviewProvider = ({children}) =>{


     const [topReview, setTopReview] = useState(10);
     const [desc, setDesc] = useState('');

     

    return (
      <ReviewContext.Provider
        value={{ topReview, setTopReview, desc, setDesc, }}
      >
        {children}
      </ReviewContext.Provider>
    );
}

export default ReviewContext;