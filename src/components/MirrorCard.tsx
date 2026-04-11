import Link from "next/link";

const mirrorItems = [
  "You\u2019re the one managing marketing (among everything else)",
  "Google Ads feels expensive but you can\u2019t turn it off",
  "Your competitors rank above you for your core services",
  "You\u2019ve tried an agency before and got a PDF nobody read",
  "You\u2019ve never heard of GEO and now you\u2019re worried you should have",
  "You know your website should work harder \u2014 you just don\u2019t know where to start",
];

export default function MirrorCard() {
  return (
    <div className="mirror-card">
      <h3
        className="text-2xl font-bold mb-5"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-teal)" }}
      >
        Sound familiar?
      </h3>
      <ul className="mirror-list">
        {mirrorItems.map((item, i) => (
          <li key={i}>
            <span className="mirror-bullet">&#10003;</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-7">
        <Link
          href="/assessment"
          className="inline-flex items-center gap-1.5 text-[15px] font-semibold no-underline transition-all"
          style={{ color: "var(--color-teal)" }}
        >
          Find out where you stand &mdash; takes 5 minutes &rarr;
        </Link>
      </div>
    </div>
  );
}
