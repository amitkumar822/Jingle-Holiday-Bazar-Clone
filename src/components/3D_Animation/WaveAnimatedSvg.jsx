import React from "react";

function WaveAnimatedSvg() {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
      {/* Inline CSS keyframes for wave animation */}
      <style>
        {`
          @keyframes waveMotion {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-25%); }
          }

          @keyframes waveMotionReverse {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(25%); }
          }

          .wave-animate {
            animation: waveMotion 10s ease-in-out infinite;
          }

          .wave-animate-reverse {
            animation: waveMotionReverse 12s ease-in-out infinite;
          }
        `}
      </style>

      {/* Front Wave */}
      <svg
        className="wave-animate w-[200%] h-40 sm:h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,160L60,154.7C120,149,240,139,360,160C480,181,600,235,720,229.3C840,224,960,160,1080,144C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      {/* Background Wave */}
      <svg
        className="absolute top-0 left-0 wave-animate-reverse w-[200%] h-40 sm:h-64 opacity-40"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#cbd5e1"
          fillOpacity="1"
          d="M0,128L60,154.7C120,181,240,235,360,229.3C480,224,600,160,720,144C840,128,960,160,1080,170.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default WaveAnimatedSvg;
