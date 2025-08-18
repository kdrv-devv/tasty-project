import { Skeleton } from "antd";

export const useLoader = () => {
  const categoriesLoader = () => {
    return (
      <>
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="w-full">
            <Skeleton.Image className="!h-[50%] !w-full" active={true} />
            <Skeleton.Input active={true} />
            <Skeleton.Input active={true} />
            <Skeleton.Button active={true} />
          </div>
        ))}
      </>
    );
  };

  return { categoriesLoader };
};
