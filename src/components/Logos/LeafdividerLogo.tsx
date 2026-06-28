export default function LeafDivider() {
  return (
    <svg 
      width="32" 
      height="16" 
      viewBox="0 0 32 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="text-[#2D4739]/30 mt-2"
    >
      {/* Left Leaf */}
      <path 
        d="M13.5 13C13.5 13 9.5 4 2 4C2 4 4.5 13 13.5 13Z" 
        fill="currentColor" 
        fillOpacity="0.15"
      />
      <path 
        d="M13.5 13C13.5 13 9.5 4 2 4C2 4 4.5 13 13.5 13Z" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M2.5 4.5C5.5 6.5 9.5 9.5 13 12" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round"
      />
  
      {/* Right Leaf */}
      <path 
        d="M18.5 13C18.5 13 22.5 4 30 4C30 4 27.5 13 18.5 13Z" 
        fill="currentColor" 
        fillOpacity="0.15"
      />
      <path 
        d="M18.5 13C18.5 13 22.5 4 30 4C30 4 27.5 13 18.5 13Z" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M29.5 4.5C26.5 6.5 22.5 9.5 19 12" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round"
      />
    </svg>
  )
}