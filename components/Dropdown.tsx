interface DropdownProps {
  label?: string;
  options: { value: string; label: string }[];
  className?: string;
  [key: string]: any;
}

export function Dropdown({ label, options, className = "", ...props }: DropdownProps) {
    return (
      <div className={`relative w-full md:w-80 ${className}`}>
        {label && <label className="block text-sm font-medium mb-1">{label}</label>}
        <select
          className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...props}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }