import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  id?: string;
  className?: string;
  containerClass?: string;
}

export function Section({ 
  title, 
  subtitle, 
  children, 
  id, 
  className = "",
  containerClass = "" 
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`w-full overflow-hidden ${className}`}
    >
      <div className={`container-responsive ${containerClass}`}>
        {(title || subtitle) && (
          <div className="mb-8 sm:mb-12 text-center">
            {subtitle && (
              <div className="text-amber-400 text-xs sm:text-sm uppercase tracking-wider font-semibold mb-2 text-shadow">
                {subtitle}
              </div>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-shadow-lg">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
