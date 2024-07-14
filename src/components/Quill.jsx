import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const QuillEditor = () => {
  const [text, setText] = useState("");
  const handleChange = value => setText(value);
  return (
    <ReactQuill value={text} onChange={handleChange} />
  )
}

export default QuillEditor