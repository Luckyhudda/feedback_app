import { useContext, useState} from 'react';
import { BiEdit} from 'react-icons/bi' 
import { RxCross2 } from "react-icons/rx"; 
import ReviewContext from '../../context/ReviewContext';
import { allReview } from '../../services/data';

const Ratting = () => {
    const { review, setReview, desc, setDesc } = useContext(ReviewContext);
    const [showModal,setShowModal] = useState(false);
     const [mainId, setMainId] = useState(-1)

    const onReviewHandler = (value) =>{
        setReview(value)
    }

    const deleteReviewHandler = () =>{
            allReview.splice(mainId, 1)
            setShowModal(false)
            setMainId(-1)
    }

    const showModalHandler = (index) =>{
        setMainId(index)
        setShowModal(true)
    }

    const showMessage = (msg) =>{
        return (
            <p>{msg}</p>
        )
    }

    const AddReviewHandler = () => {
        if(desc && desc.length > 10){
const newData = {
  id: new Date(),
  review: review,
  description: desc,
};

allReview.push(newData);
        }
        else{
            showMessage("Text must be at least 10 characters");
        }
        
    }

    let totalReview = 0;
 const averageReview = allReview?.map((el)=>totalReview += el.review);
console.log(averageReview)  
 const revireCard = allReview?.map((el,index)=>{
    return (
      <div key={index} className="bg-black p-6 max-w-[850px] m-auto mt-4 relative rounded-md">
        <>
          <p className="pt-3">
           {el.description}
          </p>
        </>
        <div className="absolute h-[45px] w-[45px] rounded-full bg-blue-700 flex justify-center items-center text-lg font-medium top-[-16px] left-[-16px]">
          {el.review}
        </div>
        <div className="flex absolute right-3 gap-1 top-2 ">
          <div>
            <BiEdit size={"1.3rem"} />
          </div>
          <div>
            <RxCross2 size={"1.3rem "} cursor={'pointer'} onClick={() => showModalHandler(el.index)}/>
          </div>
        </div>
      </div>
    );
 })

  return (
    <>
      <section>
        <div className="bg-black mt-4 rounded-[6px] p-3 max-w-[600px] m-auto">
          <div className="p-6">
            <h2 className="text-center font-sans text-lg">
              How would you rate your service with us?
            </h2>
            <div className="flex gap-2 flex-wrap justify-center mt-3 mb-3 ">
              <button
                style={{ background: review == 1 ? " rgb(29 78 216)" : "" }}
                onClick={() => onReviewHandler(1)}
                className="h-[30px] w-[30px] bg-slate-800 rounded-full text-lg font-medium"
              >
                1
              </button>
              <button
                style={{ background: review == 2 ? " rgb(29 78 216)" : "" }}
                onClick={() => setReview(2)}
                className="h-[30px] w-[30px] bg-slate-800 rounded-full text-lg font-medium"
              >
                2
              </button>
              <button
                onClick={() => setReview(3)}
                style={{ background: review == 3 ? " rgb(29 78 216)" : "" }}
                className="h-[30px] w-[30px] bg-slate-800 rounded-full text-lg font-medium"
              >
                3
              </button>
              <button
                style={{ background: review == 4 ? " rgb(29 78 216)" : "" }}
                onClick={() => setReview(4)}
                className="h-[30px] w-[30px] bg-slate-800 rounded-full text-lg font-medium"
              >
                4
              </button>
              <button
                style={{ background: review == 5 ? " rgb(29 78 216)" : "" }}
                onClick={() => setReview(5)}
                className="h-[30px] w-[30px] bg-slate-800 rounded-full text-lg font-medium"
              >
                5
              </button>
              <button
                style={{ background: review == 6 ? " rgb(29 78 216)" : "" }}
                onClick={() => setReview(6)}
                className="h-[30px] w-[30px] bg-slate-800 rounded-full text-lg font-medium"
              >
                6
              </button>
              <button
                style={{ background: review == 7 ? " rgb(29 78 216)" : "" }}
                onClick={() => setReview(7)}
                className="h-[30px] w-[30px] bg-slate-800 rounded-full text-lg font-medium"
              >
                7
              </button>
              <button
                style={{ background: review == 8 ? " rgb(29 78 216)" : "" }}
                onClick={() => setReview(8)}
                className="h-[30px] w-[30px] bg-slate-800 rounded-full text-lg font-medium"
              >
                8
              </button>
              <button
                style={{ background: review == 9 ? " rgb(29 78 216)" : "" }}
                onClick={() => setReview(9)}
                className="h-[30px] w-[30px] bg-slate-800 rounded-full text-lg font-medium"
              >
                9
              </button>
              <button
                style={{ background: review == 10 ? " rgb(29 78 216)" : "" }}
                onClick={() => setReview(10)}
                className="h-[30px] w-[30px] bg-slate-800 rounded-full text-lg font-medium"
              >
                10
              </button>
            </div>

            <div className="mt-2 flex  justify-around flex-wrap">
              <input
                type="text"
                name="input"
                id=""
                className="bg-gray-800 rounded-md  p-1 pl-3  max-w-[350px] flex-grow placeholder-white outline-none border border-gray-400"
                placeholder="Write a review"
                onChange={(e) => setDesc(e.target.value)}
              />
              <button
                onClick={AddReviewHandler}
                className="border-2 p-1 pr-3 pl-3  rounded-md hover hover:text-black hover:bg-white transition-all transform-none"
              >
                Save
              </button>
            </div>
          </div>
          {/* {desc || (desc.length < 10 && showMessage())} */}
        </div>
      </section>

      <section className="review_section m-5">
        <div>
          <div className="flex justify-around mt-5 text-lg font-bold">
            <div>{allReview.length} Reviews</div>
            <div>
              Average-Rating : {(totalReview / allReview.length).toFixed(2)}
            </div>
          </div>

          {allReview.length > 0 && revireCard}
        </div>
      </section>

      {showModal && (
        <section className="ModalPopup">
          <div className="absolute min-h-[100vh] w-[100vw] flex justify-center items-center top-0 bg-gray-800 opacity-[.9] ">
            <div className="bg-white z-999  text-black p-7 rounded-md">
              <h2 className="text-lg font-medium p-4 pt-0">
                {" "}
                Are you sure want to delete?
              </h2>
              <div className="flex justify-around">
                <button
                  onClick={deleteReviewHandler}
                  className="border border-zinc-600 p-1 rounded-md bg-zinc-200 pr-4 pl-4 hover:bg-slate-400"
                >
                  Ok
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="border border-zinc-600 p-1 rounded-md bg-zinc-200 pr-4 pl-4 hover:bg-slate-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Ratting;
