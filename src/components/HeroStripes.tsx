import { motion } from "framer-motion";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

// Vertical stripe bars with varying widths, positions and blue shades
const STRIPES = [
  { left: "2%", width: "1.2%", color: "hsl(222 55% 25%)", delay: 0 },
  { left: "4.5%", width: "2%", color: "hsl(222 50% 20%)", delay: 0.03 },
  { left: "7.5%", width: "1.5%", color: "hsl(222 60% 28%)", delay: 0.05 },
  { left: "10%", width: "2.5%", color: "hsl(222 55% 22%)", delay: 0.07 },
  { left: "13.5%", width: "1.8%", color: "hsl(222 50% 18%)", delay: 0.09 },
  { left: "16%", width: "3%", color: "hsl(222 58% 26%)", delay: 0.11 },
  { left: "20%", width: "1.2%", color: "hsl(222 52% 20%)", delay: 0.13 },
  { left: "22.5%", width: "2.2%", color: "hsl(222 56% 24%)", delay: 0.14 },
  { left: "25.5%", width: "1.6%", color: "hsl(222 48% 19%)", delay: 0.16 },
  { left: "28%", width: "2.8%", color: "hsl(222 54% 23%)", delay: 0.17 },
  { left: "32%", width: "1.4%", color: "hsl(222 60% 27%)", delay: 0.19 },
  { left: "34.5%", width: "2%", color: "hsl(222 50% 21%)", delay: 0.2 },
  { left: "37.5%", width: "1.8%", color: "hsl(222 55% 25%)", delay: 0.22 },
  { left: "40%", width: "2.5%", color: "hsl(222 52% 19%)", delay: 0.23 },
  { left: "43.5%", width: "1.3%", color: "hsl(222 58% 26%)", delay: 0.25 },
  { left: "46%", width: "2.2%", color: "hsl(222 50% 22%)", delay: 0.26 },
  { left: "49%", width: "1.6%", color: "hsl(222 54% 24%)", delay: 0.28 },
  { left: "52%", width: "2.8%", color: "hsl(222 56% 20%)", delay: 0.29 },
  { left: "56%", width: "1.5%", color: "hsl(222 60% 27%)", delay: 0.31 },
  { left: "58.5%", width: "2%", color: "hsl(222 48% 18%)", delay: 0.32 },
  { left: "61.5%", width: "1.8%", color: "hsl(222 55% 25%)", delay: 0.34 },
  { left: "64%", width: "2.5%", color: "hsl(222 52% 21%)", delay: 0.35 },
  { left: "67.5%", width: "1.2%", color: "hsl(222 58% 26%)", delay: 0.37 },
  { left: "70%", width: "2.2%", color: "hsl(222 50% 19%)", delay: 0.38 },
  { left: "73%", width: "1.6%", color: "hsl(222 54% 23%)", delay: 0.4 },
  { left: "76%", width: "2.8%", color: "hsl(222 56% 25%)", delay: 0.41 },
  { left: "80%", width: "1.4%", color: "hsl(222 60% 27%)", delay: 0.43 },
  { left: "82.5%", width: "2%", color: "hsl(222 48% 20%)", delay: 0.44 },
  { left: "85.5%", width: "1.8%", color: "hsl(222 55% 24%)", delay: 0.46 },
  { left: "88%", width: "2.5%", color: "hsl(222 52% 22%)", delay: 0.47 },
  { left: "91.5%", width: "1.3%", color: "hsl(222 58% 26%)", delay: 0.49 },
  { left: "94%", width: "2%", color: "hsl(222 50% 20%)", delay: 0.5 },
  { left: "97%", width: "1.5%", color: "hsl(222 54% 24%)", delay: 0.52 },
];

interface HeroStripesProps {
  show: boolean;
  cycle: number;
}

const HeroStripes = ({ show, cycle }: HeroStripesProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {STRIPES.map((stripe, i) => (
        <motion.div
          key={`stripe-${cycle}-${i}`}
          className="absolute top-0 bottom-0"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: show ? 1 : 0,
            opacity: show ? 0.7 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: EASE_OUT_EXPO,
            delay: show ? stripe.delay : 0,
          }}
          style={{
            left: stripe.left,
            width: stripe.width,
            backgroundColor: stripe.color,
            transformOrigin: "bottom",
          }}
        />
      ))}
    </div>
  );
};

export default HeroStripes;
