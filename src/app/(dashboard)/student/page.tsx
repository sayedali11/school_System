import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import EventCalendar from "@/components/EventCalendar";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const StudentPage = async () => {
  const { userId } = await auth();

  // Fetch the class that the student belongs to from the database

  const classItem = await prisma.class.findMany({
    where: {
      students: { some: { id: userId! } },
    },
  });

  return (
    <div className="p-4 flex flex-col gap-4 xl:flex-row">
      {/* -----left---- */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendarContainer type="classId" id={classItem[0].id} />
        </div>
      </div>
      {/* -----right---- */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8 rounded-md">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
