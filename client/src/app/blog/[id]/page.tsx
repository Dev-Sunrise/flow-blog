"use client";

import Link from "next/link";
import useSWR, { Fetcher } from "swr";

const BlogDetail = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) {
    return (
      <div className="mt-[50px] flex items-center justify-center">
        <div className="pinwheel">
          <div className="pinwheel__line"></div>
          <div className="pinwheel__line"></div>
          <div className="pinwheel__line"></div>
          <div className="pinwheel__line"></div>
          <div className="pinwheel__line"></div>
          <div className="pinwheel__line"></div>
        </div>
      </div>
    );
  }
  console.log(data);

  return (
    <div className="py-5 page-container">
      <Link
        href={"/blog"}
        className="font-bold text-grayDarkColor transition-all hover:text-primaryColor cursor-pointer"
      >
        Go Back
      </Link>
      <div className="mt-7 detail-container">
        <h2 className="text-[32px] font-bold mb-5">{data?.title}</h2>
        <h4 className="text-[17px] mb-[50px] italic text-primaryColor">
          {data?.author}
        </h4>
        <p className="text-justify">{data?.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
