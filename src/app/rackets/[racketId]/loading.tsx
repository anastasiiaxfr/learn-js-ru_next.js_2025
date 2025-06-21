import { FC } from "react";
import { Loader } from "@/components/custom/Loader";

const Loading: FC = () => {
  return <div>
    <Loader label="Loading racket page ..." />
  </div>;
};

export default Loading;
