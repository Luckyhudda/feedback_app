import { createContext, useState } from "react";

const ReviewContext = createContext();

// eslint-disable-next-line react/prop-types
export const ReviewProvider = ({children}) =>{


     const [review, setReview] = useState(10);
     const [desc, setDesc] = useState('');


    return (
      <ReviewContext.Provider value={{ review, setReview, desc, setDesc }}>
        {children}
      </ReviewContext.Provider>
    );
}

export default ReviewContext;