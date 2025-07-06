export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M128 224L48 170.667V64L128 117.333L208 64V170.667L128 224Z"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      <path
        d="M117.333 160L90.6667 144V176L117.333 160Z"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      <path
        d="M165.333 144L138.667 160L165.333 176V144Z"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="round"
      />
    </svg>
  );
}
