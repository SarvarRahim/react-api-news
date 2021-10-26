import { useRef } from "react";

const AddNews = ({setNews}) => {

  const inputRefName = useRef()
  const inputRefDesc = useRef()
  const inputRefTag = useRef()
  // const inputRef = useRef();

  const handleSubmitForm = (evt) => {
    evt.preventDefault()
    const inputValueName = inputRefName.current.value;
    const inputValueDesc = inputRefDesc.current.value;
    const inputValueTag = inputRefTag.current.value;
    if (inputValueName && inputValueDesc  && inputValueTag) {
      setNews((news) => {
        return [
          ...news,
          {
            title: inputValueName,
            description: inputValueDesc,
            author: inputValueTag
          }
        ]
      })
      inputRefName.current.value = "";
      inputRefDesc.current.value = "";
      inputRefTag.current.value = "";
    }
  }

      return (
        <>
        <form onSubmit={handleSubmitForm} className="news-form" action="#">
        <input ref={inputRefName} className="news-form__title" type="text" name="title" />
        <input ref={inputRefDesc} className="news-form__desc" type="text" name="description" />
        <input ref={inputRefTag} className="news-form__tags" type="text" name="tags" />
        <button>Send</button>
        </form>
        </>
        );
      }



  export default AddNews