import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const TeacherPage = async () => {
  const { userId } = await auth();

  return (
    <div className="p-4 flex flex-col flex-1 gap-4 xl:flex-row">
      {/* -----left---- */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendarContainer type="teacherId" id={userId!} />
        </div>
      </div>
      {/* -----right---- */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8 rounded-md">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
