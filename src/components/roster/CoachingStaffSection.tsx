import { StaffCard, type StaffCardData } from "./StaffCard";

interface CoachingStaffSectionProps {
  coaches: StaffCardData[];
}

export function CoachingStaffSection({ coaches }: CoachingStaffSectionProps) {
  return (
    <section id="coaches" className="mt-16">
      <h2 className="text-3xl font-display font-bold text-primary mb-6 uppercase">
        Coaching Staff
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coaches.map((coach) => (
          <StaffCard key={coach.slug} person={coach} />
        ))}
      </div>
    </section>
  );
}
