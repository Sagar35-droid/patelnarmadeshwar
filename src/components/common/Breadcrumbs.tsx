import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const { navigate } = useRouter();

  const allItems: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    ...items
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className={`bg-white border-b border-[#C5A059]/20 py-2.5 px-4 sm:px-6 lg:px-8 text-xs ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap text-stone-500">
        <ol className="flex items-center gap-1.5 flex-wrap list-none p-0 m-0">
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1;
            return (
              <li key={idx} className="inline-flex items-center gap-1.5">
                {idx === 0 ? (
                  <button
                    onClick={() => navigate('/')}
                    className="hover:text-[#C5A059] font-medium transition-colors flex items-center gap-1 cursor-pointer"
                    title="Go to Home"
                  >
                    <Home className="w-3.5 h-3.5 text-stone-400" />
                    <span>Home</span>
                  </button>
                ) : isLast || !item.path ? (
                  <span
                    className="text-[#1A1A1A] font-bold truncate max-w-[200px] sm:max-w-md"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <button
                    onClick={() => navigate(item.path!)}
                    className="hover:text-[#C5A059] font-medium transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}

                {!isLast && (
                  <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
