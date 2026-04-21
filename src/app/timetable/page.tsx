import { WeeklyTimetable } from "@/components/timetable/WeeklyTimetable";
import { timetableData } from "@/lib/mock-data";

export default function TimetablePage() {
  return <WeeklyTimetable days={timetableData} />;
}
