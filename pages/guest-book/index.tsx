import ContentTitle from "@/src/components/Text/ContentTitle";
import { NextPage } from "next";

const GuestBook: NextPage = () => {
  return (
    <div className="rounded-md p-12  w-full h-full">
      <ContentTitle fontColor="text-white">방 명 록</ContentTitle>
      <div className="px-2 pt-14">
        <textarea
          placeholder="한마디 적어보시오."
          className="text-sm p-2 w-full ring-1 ring-slate-900/10 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 caret-purple-500 "
        />
      </div>
    </div>
  );
};

export default GuestBook;
