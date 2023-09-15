import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
  open: boolean;
  close: (value: boolean) => void;
  blog: any;
  setBlog: (value: IBlog | null) => void;
}

const ModalDeleteBlog = (props: IProps) => {
  const { open, close, blog, setBlog } = props;

  const handleCloseMdal = () => {
    close(false);
    setBlog(null);
  };

  const handleDeleteBlog = (id: number) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success("Delete blog successfully!");
          mutate("http://localhost:8000/blogs");
          close(false);
        }
      });
  };

  return (
    <div
      className={`fixed inset-0 z-20 flex items-center justify-center ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-30 bg-white w-[400px] rounded-lg p-5">
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
          Delete Blog
        </h2>

        <form className="flex flex-col gap-y-5">
          <p className="text-center">
            Do you want to delete this blog <br />{" "}
            <span className="text-redColor">Id: {blog?.id}</span>
          </p>
          <button
            onClick={() => handleDeleteBlog(blog?.id)}
            type="button"
            className="w-full py-[10px] hover:opacity-80 transition-all text-white font-bold capitalize bg-primaryColor rounded-md"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalDeleteBlog;
