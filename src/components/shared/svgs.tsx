import React from "react";

interface BgShapeFiveProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const BgShapeFive: React.FC<BgShapeFiveProps> = ({
  className = "",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`bg-shape bg-shape-5 ${className}`}
      {...props}
    >
      <line
        className="shape-element"
        x1="0"
        y1="100"
        x2="300"
        y2="400"
        stroke="rgba(191,255,7,0.15)"
        strokeWidth={30}
      />
      <line
        className="shape-element"
        x1="100"
        y1="0"
        x2="400"
        y2="300"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth={25}
      />
    </svg>
  );
};

import { SVGProps } from "react";

export const BgShapeFour = ({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={`bg-shape bg-shape-4 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="shape-element"
        d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100"
        fill="rgba(191,255,7,0.12)"
      />
      <path
        className="shape-element"
        d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200"
        fill="rgba(255,255,255,0.1)"
      />
    </svg>
  );
};

export const BgShapeThree = ({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={`bg-shape bg-shape-3 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="50" cy="50" r="8" fill="rgba(191,255,7,0.3)" />
      <circle cx="150" cy="50" r="8" fill="rgba(255,255,255,0.3)" />
      <circle cx="250" cy="50" r="8" fill="rgba(191,255,7,0.3)" />
      <circle cx="350" cy="50" r="8" fill="rgba(255,255,255,0.3)" />

      <circle cx="100" cy="150" r="12" fill="rgba(191,255,7,0.25)" />
      <circle cx="200" cy="150" r="12" fill="rgba(255,255,255,0.25)" />
      <circle cx="300" cy="150" r="12" fill="rgba(191,255,7,0.25)" />
    </svg>
  );
};

export const BgShapeTwo = ({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={`bg-shape bg-shape-2 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 200 Q100 100, 200 200 T 400 200"
        stroke="rgba(191,255,7,0.2)"
        strokeWidth={60}
        fill="none"
      />
      <path
        d="M0 280 Q100 180, 200 280 T 400 280"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth={40}
        fill="none"
      />
    </svg>
  );
};

export const BgShapeOne = ({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={`bg-shape bg-shape-1 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="80" cy="120" r="40" fill="rgba(191,255,7,0.15)" />
      <circle cx="300" cy="80" r="60" fill="rgba(255,255,255,0.12)" />
      <circle cx="200" cy="300" r="80" fill="rgba(191,255,7,0.1)" />
      <circle cx="350" cy="280" r="30" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
};
interface StarIconProps extends SVGProps<SVGSVGElement> {
  filled?: boolean;
}

export const StarIcon = ({
  filled = false,
  className = "",
  ...props
}: StarIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "#E86B4D" : "none"}
      stroke={filled ? "#E86B4D" : "#D1D5DB"}
      strokeWidth={1.5}
      className={`w-5 h-5 md:w-6 md:h-6 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
};

export const SliderArrow = ({
  direction = "right",
  className = "",
  ...props
}: {
  direction?: "left" | "right";
  className?: string;
} & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${direction === "left" ? "rotate-180" : ""} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  );
};

export const FlowerMask = () => (
  <svg width="0" height="0">
    <defs>
      <clipPath id="flower-mask" clipPathUnits="objectBoundingBox">
        <path d="M0.5,0 L0.6,0.35 L0.95,0.25 L0.75,0.5 L1,0.6 L0.65,0.65 L0.5,1 L0.35,0.65 L0,0.6 L0.25,0.5 L0.05,0.25 L0.4,0.35 Z" />
      </clipPath>
      <clipPath id="wavy-mask" clipPathUnits="objectBoundingBox">
        <path d="M0.5,0 C0.6,0 0.7,0.1 0.8,0.1 C0.9,0.1 1,0 1,0.2 C1,0.4 0.9,0.5 0.9,0.6 C0.9,0.7 1,0.8 0.8,0.9 C0.7,1 0.6,0.9 0.5,0.9 C0.4,0.9 0.3,1 0.2,0.9 C0,0.8 0.1,0.7 0.1,0.6 C0.1,0.5 0,0.4 0,0.2 C0,0 0.1,0.1 0.2,0.1 C0.3,0.1 0.4,0 0.5,0" />
      </clipPath>
    </defs>
  </svg>
);
export const ArrowIconLeft = ({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`arrow ${className}`}
      {...props}
    >
      <path
        d="M7 11C6.69357 8.85497 5.20151 7.06717 3.1459 6.38196L2 6M2 6L13 6M2 6L3.1459 5.61803C5.20151 4.93283 6.69357 3.14503 7 1"
        stroke="currentColor"
        strokeWidth={1.2}
      />
    </svg>
  );
};
export const ArrowIconRight = ({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`arrow ${className}`}
      {...props}
    >
      <path
        d="M6 1C6.30643 3.14503 7.79849 4.93283 9.8541 5.61803L11 6M11 6H0M11 6L9.8541 6.38197C7.79849 7.06717 6.30643 8.85497 6 11"
        stroke="currentColor"
        strokeWidth={1.2}
      />
    </svg>
  );
};

export const CurveGridShape = ({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M-10,50 Q25,-10 110,50"
        stroke="#CAFF33"
        strokeWidth={0.1}
        fill="none"
      />
      <path
        d="M-10,70 Q25,120 110,70"
        stroke="#CAFF33"
        strokeWidth={0.1}
        fill="none"
      />
      <path
        d="M20,-10 Q-10,50 20,110"
        stroke="#CAFF33"
        strokeWidth={0.1}
        fill="none"
      />
      <path
        d="M80,-10 Q110,50 80,110"
        stroke="#CAFF33"
        strokeWidth={0.1}
        fill="none"
      />
    </svg>
  );
};

export const CurveIcon = ({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 189.929 189.929"
      xmlns="http://www.w3.org/2000/svg"
      className={`curve_svg ${className}`}
      fill="currentColor"
      {...props}
    >
      <path d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z" />
    </svg>
  );
};
