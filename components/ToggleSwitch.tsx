import { ChangeEvent } from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
}

export function ToggleSwitch({ checked, onChange, label, className = "" }: ToggleSwitchProps) {
    return (
      <label className={`relative inline-flex items-center cursor-pointer ${className}`}>
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
          role="switch"
          aria-checked={checked}
        />
        <div className="w-10 h-5 md:w-11 md:h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer-checked:bg-blue-600 peer-checked:after:translate-x-5 after:absolute after:content-[''] after:h-5 after:w-5 md:after:h-6 md:after:w-6 after:bg-white after:rounded-full after:top-0.5 after:left-0.5 after:transition-all"></div>
        {label && <span className="ml-3 text-sm font-medium">{label}</span>}
      </label>
    );
  }