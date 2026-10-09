import React from 'react';

interface FrameProps {
  src: string;
  alt: string;
  onClick: () => void;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  className?: string;
}

/**
 * MacBook 擬真外框（符合 Apple MacBook Pro / Air 經典金屬機身、螢幕細邊框與開槽凹口）
 */
export const MacBookFrame: React.FC<FrameProps> = ({
  src,
  alt,
  onClick,
  width = 1200,
  height = 750,
  loading = 'lazy',
  className = '',
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className={`flex flex-col items-center w-full group ${className}`}>
      {/* MacBook 螢幕上蓋 (Lid) */}
      <div
        role="button"
        tabIndex={0}
        aria-label={`${alt}（點擊滿版觀看）`}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className="w-full relative bg-[#1c1d22] p-1.5 sm:p-2 rounded-t-xl sm:rounded-t-2xl shadow-2xl border-t border-x border-slate-700/80 cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-[#81BDD6]"
      >
        {/* MacBook 頂部極簡鏡頭微孔 */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700/60 flex items-center justify-center pointer-events-none">
          <div className="w-0.5 h-0.5 rounded-full bg-blue-950" />
        </div>

        {/* 螢幕顯示區 */}
        <div className="rounded-t-md sm:rounded-t-lg overflow-hidden bg-black border border-slate-800 relative">
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            className="w-full h-auto object-cover block"
          />

          {/* 點擊放大懸浮提示 */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center pointer-events-none">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#81BDD6]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
              點擊滿版觀看
            </span>
          </div>
        </div>
      </div>

      {/* MacBook 轉軸處 (Hinge) */}
      <div className="w-full h-1.5 sm:h-2 bg-gradient-to-b from-[#23262d] to-[#121316] border-t border-slate-700" />

      {/* MacBook 機身下蓋金屬底座 (Bottom Base with Opening Notch) */}
      <div className="w-[103%] -ml-[1.5%] h-3 sm:h-3.5 bg-gradient-to-b from-[#cbd5e1] via-[#94a3b8] to-[#64748b] rounded-b-md sm:rounded-b-lg shadow-xl relative flex justify-center items-start border-t border-slate-300">
        {/* 正中央單手開蓋凹槽 (Thumb Notch) */}
        <div className="w-14 sm:w-20 h-1 sm:h-1.5 bg-[#475569] rounded-b-md -mt-px shadow-inner" />
      </div>

      {/* 底部自然陰影 */}
      <div className="w-[96%] h-1 bg-black/40 blur-[3px] rounded-full mt-0.5" />
    </div>
  );
};

// 保持相容性別名
export const IMacFrame = MacBookFrame;

/**
 * iPhone 極窄邊框擬真外框（符合 iPhone Pro 鈦金屬超窄邊框，不再以過寬圖層遮擋截圖原有的靈動島）
 */
export const IPhoneFrame: React.FC<
  FrameProps & { maxWidthClass?: string }
> = ({
  src,
  alt,
  onClick,
  width = 360,
  height = 780,
  loading = 'lazy',
  maxWidthClass = 'max-w-[280px] sm:max-w-[320px]',
  className = '',
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${alt}（點擊滿版觀看）`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={`relative w-full ${maxWidthClass} mx-auto bg-[#1a1b1f] p-1 sm:p-1.5 rounded-[2.2rem] sm:rounded-[2.6rem] shadow-2xl border-[2.5px] border-slate-600/90 ring-1 ring-slate-800/80 cursor-zoom-in group transition-transform duration-300 group-hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-[#81BDD6] ${className}`}
    >
      {/* 螢幕顯示區（超窄圓角邊框，完整展現截圖內原生狀態列與靈動島比例） */}
      <div className="rounded-[1.9rem] sm:rounded-[2.3rem] overflow-hidden bg-black relative">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className="w-full h-auto block object-contain"
        />

        {/* 懸浮點擊放大提示 */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center pointer-events-none">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg shadow-lg backdrop-blur-sm flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5 text-[#81BDD6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
            點擊滿版觀看
          </span>
        </div>
      </div>
    </div>
  );
};
