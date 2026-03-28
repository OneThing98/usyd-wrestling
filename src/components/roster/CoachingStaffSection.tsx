import { mockCoaches } from "@/lib/mock-data";
import { StaffCard } from "./StaffCard";

export function CoachingStaffSection() {
  return (
    <section id="coaches" className="mt-16">
      <h2 className="text-3xl font-display font-bold text-primary mb-6 uppercase">
        Coaching Staff
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockCoaches.map((coach) => (
          <StaffCard key={coach.id} person={coach} />
        ))}
      </div>
    </section>
  );
}
