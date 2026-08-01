type FilterButtonProps = {
  active: boolean;
  label: string;
  onClick: () => void;
};

export default function filterbutton({
  active,
  label,
  onClick,
}: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300
        ${
          active
            ? "bg-blue-600 text-white shadow-md"
            : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-blue-400"
        }`}
    >
      {label}
    </button>
  );
}