import { StaffCard, type StaffCardData } from "./StaffCard";

interface SupportStaffSectionProps {
  supportStaff: StaffCardData[];
}

export function SupportStaffSection({ supportStaff }: SupportStaffSectionProps) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-display font-bold text-primary mb-6 uppercase">
        Support Staff
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {supportStaff.map((staff) => (
          <StaffCard key={staff.slug} person={staff} />
        ))}
      </div>
    </section>
  );
}
