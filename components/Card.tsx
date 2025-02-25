import { ReactNode } from 'react';

export function Card({ title, description, buttonText, children, className = "" }: 
    { title?: string; description?: string; buttonText?: string; children?: ReactNode; className?: string }) {
    return (
      <div className={`w-full md:w-80 bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform ${className}`}>
        {title && <h3 className="text-lg md:text-xl font-semibold">{title}</h3>}
        {description && <p className="text-gray-600 mt-2 text-sm md:text-base">{description}</p>}
        {children}
        {buttonText && (
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition w-full md:w-auto">
            {buttonText}
          </button>
        )}
      </div>
    );
  }