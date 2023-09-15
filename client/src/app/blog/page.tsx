"use client";

import Table from "@/components/Table";
import useSWR from "swr";

const Blog = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading } = useSWR("http://localhost:8000/blogs", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

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

  return (
    <div className="py-5 page-container">
      <div className="w-full overflow-x-auto">
        <Table blogs={data?.sort((a: any, b: any) => b.id - a.id)}></Table>
      </div>
    </div>
  );
};

export default Blog;
