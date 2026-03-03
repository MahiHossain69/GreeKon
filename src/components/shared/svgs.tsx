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
