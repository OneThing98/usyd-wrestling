const SIGNUP_URL =
  "https://susf.perfectmind.com/Menu/MemberRegistration/MemberSignIn";

interface PricingTier {
  title: string;
  prices: { label: string; amount: string }[];
}

const TIERS: PricingTier[] = [
  {
    title: "USYD Students",
    prices: [
      { label: "6 Month", amount: "$210" },
      { label: "12 Month", amount: "$280" },
    ],
  },
  {
    title: "Non\u2011Students",
    prices: [
      { label: "1 Month", amount: "$65" },
      { label: "6 Month", amount: "$255" },
      { label: "12 Month", amount: "$370" },
    ],
  },
];

export function MembershipPage() {
  return (
    <div className="bg-primary text-white">
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-wide">
          Club Membership
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
          Membership entitles you to unlimited access to classes with just one
          annual or semi&#8209;annual payment, no matter your experience level.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TIERS.map((tier) => (
            <article
              key={tier.title}
              className="bg-primary border border-secondary/60 shadow-lg flex flex-col"
            >
              <header className="bg-secondary text-dark py-4 px-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wider text-center">
                  {tier.title}
                </h2>
              </header>
              <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
                {tier.prices.map((price) => (
                  <div
                    key={price.label}
                    className="flex items-baseline justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-display uppercase tracking-wider text-base md:text-lg text-gray-200">
                      {price.label}
                    </span>
                    <span className="font-display font-bold text-2xl md:text-3xl text-secondary">
                      {price.amount}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide">
            How To Join
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed">
            You can join by going to the{" "}
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline hover:text-secondary/80"
            >
              SUSF Signup Page
            </a>{" "}
            and signing up, selecting &ldquo;Memberships&rdquo;, then selecting
            what category of &ldquo;club membership&rdquo; you fall into. Then,
            search &ldquo;Wrestling&rdquo; and select either the 12 or 6 month
            fee. Finally fill in the Pre&#8209;Exercise Screening and pay for
            your membership.
          </p>

          <p className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed">
            For further information contact us at{" "}
            <a
              href="mailto:contact@usydwrestling.org"
              className="text-secondary underline hover:text-secondary/80"
            >
              contact@usydwrestling.org
            </a>
            , or call the SUSAC front office at{" "}
            <a
              href="tel:+61293514978"
              className="text-secondary underline hover:text-secondary/80"
            >
              (02) 9351 4978
            </a>
            .
          </p>

          <div className="mt-10">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary font-display font-bold uppercase tracking-widest text-lg px-12 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Join Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
