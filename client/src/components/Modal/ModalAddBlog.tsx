import { useState } from "react";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
  open: boolean;
  close: (value: boolean) => void;
}

const ModalCreateBlog = (props: IProps) => {
  const { open, close } = props;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleCreateBlog = () => {
    if (!title) {
      toast.error("Not empty title!");
      return;
    }

    if (!author) {
      toast.error("Not empty author!");
      return;
    }

    if (!content) {
      toast.error("Not empty content!");
      return;
    }

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, content }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          mutate("http://localhost:8000/blogs");
          toast.success("Create new blog successfully!");
          setTitle("");
          setAuthor("");
          setContent("");
          close(false);
        }
      });
  };

  const handleCloseMdal = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    close(false);
  };

  return (
    <div
      className={`fixed inset-0 z-20 flex items-center justify-center ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-30 bg-white w-[500px] rounded-lg p-5">
        <span
          className="absolute top-[-15px] right-[-15px] bg-primaryColor p-[5px] rounded-md text-white cursor-pointer"
          onClick={() => handleCloseMdal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <h2 className="mb-5 text-xl font-bold text-center uppercase text-primaryColor">
          Create Blog
        </h2>

        <form autoComplete="off" className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-[5px] items-start">
            <label
              htmlFor="title"
              className="inline-block font-bold cursor-pointer"
            >
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              type="text"
              placeholder="Enter your title..."
              className="px-[10px] py-[5px] border border-colorGray rounded-md  transition-all w-full outline-none focus:border-primaryColor"
            />
          </div>
          <div className="flex flex-col gap-y-[5px] items-start">
            <label
              htmlFor="author"
              className="inline-block font-bold cursor-pointer"
            >
              Author
            </label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              id="author"
              type="text"
              placeholder="Enter your author..."
              className="px-[10px] py-[5px] border border-colorGray rounded-md  transition-all w-full outline-none focus:border-primaryColor"
            />
          </div>
          <div className="flex flex-col gap-y-[5px] items-start">
            <label
              htmlFor="content"
              className="inline-block font-bold cursor-pointer"
            >
              Author
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              id="content"
              placeholder="Enter your content..."
              className="px-[10px]  py-[5px]  border border-colorGray rounded-md  transition-all w-full outline-none focus:border-primaryColor resize-none"
            ></textarea>
          </div>

          <button
            onClick={() => handleCreateBlog()}
            type="button"
            className="w-full py-[10px] hover:opacity-80 transition-all text-white font-bold capitalize bg-primaryColor rounded-md"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalCreateBlog;
