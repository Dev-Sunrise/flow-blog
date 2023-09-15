"use client";

import Link from "next/link";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data } = useSWR("http://localhost:8000/blogs", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <div className="py-5 page-container grid grid-cols-4 gap-[30px]">
      {data?.slice(0, 8)?.map((blog: IBlog) => (
        <div
          key={blog.id}
          className="border-2 p-[15px] shadow-lg transition-all hover:border-primaryColor rounded-lg flex flex-col h-[300px]"
        >
          <div>
            <h2 className="font-bold text-xl line-clamp-1 mb-2">
              {blog.title}
            </h2>
            <span className="italic line-clamp-1">{blog.author}</span>
            <p className="line-clamp-5 text-justify mt-5">{blog.content}</p>
          </div>
          <Link
            href={`/blog/${blog.id}`}
            className="mt-auto bg-primaryColor px-[10px] py-[5px] text-center text-white rounded-md hover:opacity-90 transition-all"
          >
            View Detail
          </Link>
        </div>
      ))}
    </div>
  );
}
