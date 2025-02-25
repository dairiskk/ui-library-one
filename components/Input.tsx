interface InputProps {
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  [key: string]: any;
}

export function Input({
    label,
    placeholder,
    error,
    className = "",
    ...props
  }: InputProps) {
    return (
      <div>
        {label && <label className="block text-sm font-medium mb-1">{label}</label>}
        <input
          type="text"
          placeholder={placeholder}
          className={`px-4 py-3 w-full md:w-80 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          aria-invalid={!!error}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }