import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-6">
      {/* Soft ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="absolute h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />

        <div
          className="absolute h-[22rem] w-[22rem] rounded-full bg-success/10 blur-3xl animate-float"
          style={{ animationDelay: "1.2s" }}
        />

        <div
          className="absolute h-[16rem] w-[16rem] rounded-full bg-warning/10 blur-2xl animate-float"
          style={{ animationDelay: "0.6s" }}
        />
      </div>

      {/* Concentric pulse rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="absolute h-40 w-40 rounded-full border border-primary/20 animate-ring-pulse"
          style={{ animationDelay: "0s" }}
        />

        <div
          className="absolute h-40 w-40 rounded-full border border-primary/20 animate-ring-pulse"
          style={{ animationDelay: "0.8s" }}
        />

        <div
          className="absolute h-40 w-40 rounded-full border border-success/20 animate-ring-pulse"
          style={{ animationDelay: "1.6s" }}
        />
      </div>

      {/* Success content */}
      <div className="relative z-10 w-full max-w-md text-center">
        {/* Icon + particles */}
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
          {/* Burst particles */}
          {[
            {
              x: "-44px",
              y: "-36px",
              color: "bg-primary",
              delay: "0.2s",
            },
            {
              x: "44px",
              y: "-30px",
              color: "bg-success",
              delay: "0.35s",
            },
            {
              x: "30px",
              y: "44px",
              color: "bg-warning",
              delay: "0.5s",
            },
            {
              x: "-40px",
              y: "24px",
              color: "bg-primary",
              delay: "0.65s",
            },
            {
              x: "0px",
              y: "-48px",
              color: "bg-success",
              delay: "0.8s",
            },
          ].map((particle, index) => (
            <span
              key={index}
              className={`pointer-events-none absolute h-2 w-2 rounded-full ${particle.color} opacity-80 animate-particle`}
              style={{
                ["--particle-x" as string]: particle.x,
                ["--particle-y" as string]: particle.y,
                animationDelay: particle.delay,
              }}
            />
          ))}

          {/* Success icon */}
          <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full bg-success/15 text-success shadow-lg shadow-success/20 animate-scale-pop">
            <svg
              className="h-10 w-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeDasharray="32"
                strokeDashoffset="32"
                className="animate-draw-check"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1
          className="text-3xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.35s" }}
        >
          Thank You!
        </h1>

        {/* Description */}
        <p
          className="mt-3 text-muted-foreground opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.55s" }}
        >
          We have received your demo request. Our team will reach out shortly
          to schedule your personalized walkthrough.
        </p>

        {/* Buttons */}
        <div
          className="mt-8 flex flex-col items-center gap-3 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.75s" }}
        >
          <Link
            to="/"
            className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/30 sm:w-auto"
          >
            Back to Dashboard
          </Link>

          <Link
            to="/pricing"
            className="inline-flex w-full items-center justify-center rounded-lg border border-input bg-card px-6 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent sm:w-auto"
          >
            Book another demo
          </Link>
        </div>
      </div>
    </div>
  );
}