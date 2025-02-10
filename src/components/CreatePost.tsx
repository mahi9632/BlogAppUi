import { useState, ChangeEvent } from "react";
import { FormData } from "../utils/types";
import { createPost } from "../api/posts.api";
import { toast, ToastContainer } from "react-toastify";

interface CreatePostProps{
 setLoading: (loading: boolean) => void;
}

export const  CreatePost: React.FC<CreatePostProps> = ({setLoading}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({ title: "", content: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const notify = (message:string) => toast(message,{position: "top-center"});

  const handleSubmit = async () => {
  const {title,content} =formData
  if(title &&content){

  
   setLoading(true)
   const res = await createPost(formData)
   if (res?.ok) {
    notify("Post Added successfully!")
    setIsOpen(false);
    setFormData({ title: "", content: "" });
  } else {
    notify("Error while submitting data");
  }
  setLoading(false)

 }else{
  notify("Please Enter valid Inputs")
 }

  };

  return (
    <>
      <div className="container text-center mt-5">
        {isOpen && (
          <div className="modal show d-block">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Enter Details</h5>
                  <button className="btn-close" onClick={() => setIsOpen(false)}></button>
                </div>

                <div className="modal-body">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      value={formData.title}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="content"
                      placeholder="Content"
                      value={formData.content}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="modal-footer">
                  <button className="btn btn-success" onClick={handleSubmit}>
                    Create
                  </button>
                  <button className="btn btn-danger" onClick={() => setIsOpen(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Create Button */}
      <div>
        <div
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: "#012169",
            padding: "0.5%",
            color: "white",
            position: "absolute",
            top: "1%",
            borderRadius: 5,
            right: "6%",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-pen-fill"> Create Post</i>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
