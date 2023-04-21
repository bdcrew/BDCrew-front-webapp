import ContentTitle from "@/components/basic/Text/ContentTitle";
import GuestComment from "@/components/business/guest/GuestComment";
import { NextPage } from "next";
import { examGuestCommentList } from "src/data/guest";

const GuestBook: NextPage = () => {
  return (
    <div className="rounded-md p-12  w-full h-full">
      <ContentTitle>Guest Book</ContentTitle>
      <div className="pt-10">
        <textarea
          placeholder="Write Here."
          className="text-sm p-2 w-full ring-1 ring-slate-900/10 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 caret-purple-500 "
        />
      </div>
      <div className="py-10">
        {examGuestCommentList.map((guestComment) => {
          return (
            <GuestComment key={guestComment.id} guestComment={guestComment} />
          );
        })}
      </div>
    </div>
  );
};

export default GuestBook;
