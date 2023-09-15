import ModalCreateBlog from "@/components/Modal/ModalAddBlog";
import ModalUpdateBlog from "@/components/Modal/ModalUpdateBlog";
import Link from "next/link";
import { useState } from "react";
import ModalDeleteBlog from "../Modal/ModalDeleteBlog";

interface IProps {
  blogs: IBlog[];
}

const Table = (props: IProps) => {
  const { blogs } = props;
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col items-center justify-between pb-10 md:flex-row gap-y-5 md:gap-y-0">
        <span className="text-xl font-bold text-primaryColor">Blog List:</span>
        <button
          onClick={() => setShowModalCreate(!showModalCreate)}
          className="bg-blue-300 text-white py-[5px] px-[10px] rounded-lg hover:opacity-90 transition-all"
        >
          Create Blog
        </button>
      </div>

      <table className="table-list">
        <thead>
          <tr>
            <th>
              <span>No</span>
            </th>
            <th>
              <span>Title</span>
            </th>
            <th>
              <span>Author</span>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>

              <td>
                <span className="line-clamp-1">{item.title}</span>
              </td>

              <td>
                <span className="line-clamp-1">{item.author}</span>
              </td>

              <td>
                <div className="flex items-center gap-x-4">
                  <Link
                    href={`/blog/${item.id}`}
                    className="hover:text-blueColor transition-all cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </Link>

                  <span
                    onClick={() => {
                      setBlog(item);
                      setShowModalUpdate(true);
                    }}
                    className="hover:text-yellowColor transition-all cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </span>

                  <span
                    onClick={() => {
                      setBlog(item);
                      setShowModalDelete(true);
                    }}
                    className="hover:text-redColor transition-all cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalCreateBlog
        open={showModalCreate}
        close={setShowModalCreate}
      ></ModalCreateBlog>

      <ModalUpdateBlog
        open={showModalUpdate}
        close={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      ></ModalUpdateBlog>

      <ModalDeleteBlog
        open={showModalDelete}
        close={setShowModalDelete}
        blog={blog}
        setBlog={setBlog}
      ></ModalDeleteBlog>
    </>
  );
};

export default Table;
