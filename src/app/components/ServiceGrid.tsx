/**
 * The six things we actually do, one card each. No tabs - the previous version
 * hid five of six behind a click, and visitors scan rather than click.
 *
 * Each card is a channel name plus one sentence. The icon tint is there to
 * make the grid scannable at a glance, not to decorate.
 */

import Link from "next/link";

type Service = {
  name: string;
  body: string;
  href: string;
  tint: string;
  icon: React.ReactNode;
};

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services: Service[] = [
  {
    name: "24/7 app support",
    body: "Your merchants get a real answer at 2am their time - not whenever you next open the laptop.",
    href: "/services/24-7-shopify-app-support",
    tint: "chip-orange",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    name: "Email support",
    body: "Every email answered in your tone, from your playbook. You stop babysitting the inbox.",
    href: "/services/email-support",
    tint: "chip-blue",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m3.5 7.5 8.5 6 8.5-6" />
      </svg>
    ),
  },
  {
    name: "Live chat",
    body: "A real person in the widget while the merchant is still in your app, guiding them through it.",
    href: "/services/live-chat-support",
    tint: "chip-teal",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M20 15a2.5 2.5 0 0 1-2.5 2.5H9L4 21V6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5z" />
      </svg>
    ),
  },
  {
    name: "Social media support",
    body: "Frustrated tweets and “how does this work?” DMs get a fast, warm reply - in public, before they harden.",
    href: "/services/social-media-support",
    tint: "chip-pink",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 0 0 5 0v-1a9 9 0 1 0-3.5 7.1" />
      </svg>
    ),
  },
  {
    name: "Bug reporting",
    body: "Bugs reach your engineer with repro steps, versions and logs attached. Clear signal, not noise.",
    href: "/services/bug-reporting-and-triage",
    tint: "chip-violet",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    name: "Helpdesk management",
    body: "Tickets sorted, tagged and moving. The queue stays clean without you opening it.",
    href: "/services/helpdesk-management",
    tint: "chip-amber",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M4 13h4l1.5 3h5L16 13h4" />
        <path d="M5.5 5.5 4 13v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5l-1.5-7.5A2 2 0 0 0 16.5 4h-9a2 2 0 0 0-2 1.5z" />
      </svg>
    ),
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {services.map((sv) => (
        <Link
          key={sv.name}
          href={sv.href}
          className="rounded-[14px] border border-hairline bg-canvas-raised p-6"
        >
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-[10px] ${sv.tint}`}
          >
            <span className="h-[18px] w-[18px]">{sv.icon}</span>
          </span>
          <h3 className="mt-4 text-[17px] font-semibold leading-snug text-ink">
            {sv.name}
          </h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-mute">
            {sv.body}
          </p>
        </Link>
      ))}
    </div>
  );
}
