import { GuestComment } from "@/type/api.type";
import { memo } from "react";

interface P {
  guestComment: GuestComment;
}

const GuestComment: React.FC<P> = ({ guestComment }) => {
  return (
    <div className="w-full border-purple-400 border-2 rounded text-gray-600">
      <p className="text-xl border-purple-400 border-b-2 px-2 py-3">
        {guestComment.name}
      </p>
      <p className="text-base px-2 py-3 text-slate-700">
        {guestComment.comment}
      </p>
      <div className="flex justify-end">
        
      </div>
    </div>
  );
};

export default memo(GuestComment);
