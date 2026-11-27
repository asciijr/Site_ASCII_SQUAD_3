interface ArrowIconProps {
  size?: number;
  className?: string;
}

function ArrowIcon({ size = 16, className }: ArrowIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      aria-hidden="true"
    >
      <path d="M4 24h38M26 8l16 16-16 16" />
    </svg>
  );
}

export default ArrowIcon;
