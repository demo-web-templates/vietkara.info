import React, { useState, useRef, useLayoutEffect } from 'react';
import { TabOption } from '../types';

interface StackedTabsProps {
  tabs: TabOption[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const StackedTabs: React.FC<StackedTabsProps> = ({ tabs, activeTab, onTabChange }) => {
  const [widths, setWidths] = useState<number[]>([]);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    // Measure the natural width of the text labels plus some horizontal padding
    const measured = tabs.map((_, i) => {
      const el = textRefs.current[i];
      // Base padding (e.g. 32px) + text width
      return el ? Math.ceil(el.offsetWidth + 36) : 100; 
    });
    setWidths(measured);
  }, [tabs]);

  // Calculate cumulative width for the tab at 'index'
  // Rule: Width = Content Width + Sum of Previous Widths
  const getCumulativeWidth = (index: number) => {
    let sum = 0;
    for (let i = 0; i <= index; i++) {
      sum += widths[i] || 0;
    }
    return sum;
  };

  // Calculate padding-left to push text to the visible area
  // Rule: Padding Left = Sum of Previous Widths
  const getPaddingLeft = (index: number) => {
    let sum = 0;
    for (let i = 0; i < index; i++) {
      sum += widths[i] || 0;
    }
    return sum;
  };

  return (
    <div className="relative h-[41px] flex-grow ml-1">
       {/* Hidden measurement layer */}
       <div className="absolute opacity-0 pointer-events-none flex" aria-hidden="true">
         {tabs.map((tab, i) => (
           <span key={tab.id} ref={el => textRefs.current[i] = el} className="text-xs font-bold whitespace-nowrap px-4">
             {tab.label}
           </span>
         ))}
       </div>

       {/* Stacked Tabs */}
       {tabs.map((tab, i) => {
         const isActive = activeTab === tab.id;
         const width = getCumulativeWidth(i);
         const paddingLeft = getPaddingLeft(i);
         // Z-index rule: First tab is highest (top), subsequent tabs are lower (behind)
         const zIndex = tabs.length - i;
         
         return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`absolute bottom-0 left-0 transition-all duration-300 ease-out flex items-center
                ${isActive ? 'h-[41px]' : 'h-[36px] hover:h-[38px]'}
                rounded-tr-2xl rounded-tl-lg
                border-t border-white/30
                shadow-[2px_-2px_4px_rgba(0,0,0,0.15)]
              `}
              style={{
                width: width > 0 ? `${width}px` : 'auto',
                paddingLeft: `${paddingLeft}px`,
                zIndex: zIndex,
                background: isActive 
                  ? 'linear-gradient(to bottom, #ff7fa3, #ff5c8a)' // Active Pink
                  : 'linear-gradient(to bottom, #e8e8e8, #dcdcdc)', // Inactive Grey
                color: isActive ? 'white' : '#6b7280',
              }}
            >
              {/* Text container centered in the exposed part of the tab */}
              <div className="w-full flex justify-center items-center px-2">
                <span className="text-xs font-bold truncate">
                  {tab.label}
                </span>
              </div>
            </button>
         );
       })}
    </div>
  );
};