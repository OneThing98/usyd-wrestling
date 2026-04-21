import type { TimetableDay } from "@/types";

interface WeeklyTimetableProps {
  days: TimetableDay[];
  note?: string;
}

const DEFAULT_NOTE =
  "All sessions are open to members of all experience levels unless otherwise noted.";

export function WeeklyTimetable({ days, note }: WeeklyTimetableProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <header className="mb-8 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-wide text-primary">
          Training Timetable
        </h1>
        <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          {note ?? DEFAULT_NOTE}
        </p>
      </header>

      <div className="hidden lg:grid grid-cols-7 gap-3">
        {days.map((day) => (
          <div key={day.day} className="flex flex-col">
            <div className="bg-secondary text-dark font-display font-bold uppercase tracking-wider text-center py-2 text-sm">
              {day.day}
            </div>
            <div className="flex flex-col gap-3 mt-3 flex-1">
              {day.sessions.length === 0 ? (
                <div className="flex items-center justify-center h-full min-h-[100px] border border-dashed border-gray-300 text-gray-400 text-xs">
                  Rest Day
                </div>
              ) : (
                day.sessions.map((session, i) => (
                  <article
                    key={i}
                    className="bg-primary text-white p-3 border-l-4 border-secondary shadow-sm"
                  >
                    <h3 className="font-display font-bold uppercase text-sm leading-tight">
                      {session.name}
                    </h3>
                    <p className="mt-2 text-xs text-gray-200">{session.time}</p>
                    <p className="mt-1 text-xs text-secondary">{session.location}</p>
                  </article>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:hidden flex flex-col gap-6">
        {days.map((day) => (
          <div key={day.day}>
            <div className="bg-secondary text-dark font-display font-bold uppercase tracking-wider text-center py-2">
              {day.day}
            </div>
            <div className="flex flex-col gap-3 mt-3">
              {day.sessions.length === 0 ? (
                <div className="border border-dashed border-gray-300 py-4 text-center text-gray-400 text-sm">
                  Rest Day
                </div>
              ) : (
                day.sessions.map((session, i) => (
                  <article
                    key={i}
                    className="bg-primary text-white p-4 border-l-4 border-secondary"
                  >
                    <h3 className="font-display font-bold uppercase text-base">
                      {session.name}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <p className="text-sm text-gray-200">{session.time}</p>
                      <p className="text-sm text-secondary">{session.location}</p>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
