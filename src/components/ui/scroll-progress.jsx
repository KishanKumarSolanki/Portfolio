import { motion, useScroll } from "motion/react";

import { cn } from "@/lib/utils"

export function ScrollProgress({
  className,
  ref,
  ...props
}) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#B185FF] via-[#FF66C4] to-[#7B2EFF]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props} />
  );
}
