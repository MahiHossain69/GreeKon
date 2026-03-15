import React from "react";
import { cn } from "@/lib/utils";
import { CurveIcon } from "./svgs";

interface RetroTvErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  errorCode?: string;
  errorMessage?: string;
}

const RetroTvError = React.forwardRef<HTMLDivElement, RetroTvErrorProps>(
  (
    { className, errorCode = "404", errorMessage = "NOT FOUND", ...props },
    ref,
  ) => {
    // Splits the error code into individual characters
    const errorCodeDigits = errorCode.split("");

    return (
      <div
        ref={ref}
        className={cn(
          "main_wrapper flex items-center justify-center min-h-[500px] py-20",
          className,
        )}
        {...props}
      >
        <div className="main">
          <div className="antenna">
            <div className="antenna_shadow"></div>
            <div className="a1"></div>
            <div className="a1d"></div>
            <div className="a2"></div>
            <div className="a2d"></div>
            <div className="a_base"></div>
          </div>
          <div className="tv">
            <div className="cruve">
              <CurveIcon />
            </div>
            <div className="display_div">
              <div className="screen_out">
                <div className="screen_out1">
                  <div className="screen">
                    <span className="notfound_text font-tanker">
                      {errorMessage}
                    </span>
                  </div>
                  <div className="screenM">
                    <span className="notfound_text font-tanker">
                      {errorMessage}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lines">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <div className="buttons_div">
              <div className="b1">
                <div></div>
              </div>
              <div className="b2"></div>
              <div className="speakers">
                <div className="g1">
                  <div className="g11"></div>
                  <div className="g12"></div>
                  <div className="g13"></div>
                </div>
                <div className="g"></div>
                <div className="g"></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="base1"></div>
            <div className="base2"></div>
            <div className="base3"></div>
          </div>
        </div>
        <div className="text_404 select-none pointer-events-none">
          {/* Map over the error code digits to render them */}
          {errorCodeDigits.map((digit, index) => (
            <div
              key={index}
              className={cn(
                `text_404${index + 1} font-tanker`,
                index === 1 && "relative top-10",
              )}
            >
              {digit}
            </div>
          ))}
        </div>
      </div>
    );
  },
);

RetroTvError.displayName = "RetroTvError";

export { RetroTvError };
