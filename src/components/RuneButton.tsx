import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RuneButtonProps {
  rune: string;
  label: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "circular" | "square";
  isActive?: boolean;
}

export const RuneButton: React.FC<RuneButtonProps> = ({
  rune,
  label,
  onClick,
  className,
  size = "md",
  variant = "circular",
  isActive = false,
}) => {
  const sizeClasses = {
    sm: "w-10 h-10 text-lg",
    md: "w-14 h-14 text-2xl",
    lg: "w-20 h-20 text-4xl",
    xl: "w-24 h-24 text-5xl",
  };

  return (
    <Tooltip>
      <TooltipTrigger
        onClick={onClick}
        className={cn(
          "flex flex-col items-center justify-center bg-transparent cursor-pointer focus-visible:outline-none",
          sizeClasses[size],
          className
        )}
      >
        <motion.div
          animate={{
            backgroundColor: isActive ? "rgba(197, 160, 89, 0.15)" : "rgba(197, 160, 89, 0)",
            borderColor: isActive ? "rgba(197, 160, 89, 0.8)" : "rgba(197, 160, 89, 0.3)",
            color: isActive ? "var(--primary)" : "var(--foreground)",
            boxShadow: isActive ? "0 0 20px rgba(197, 160, 89, 0.2)" : "0 0 0px rgba(197, 160, 89, 0)",
          }}
          whileHover={{ 
            scale: 1.05, 
            color: "var(--primary)",
            backgroundColor: "rgba(197, 160, 89, 0.05)",
            borderColor: "rgba(197, 160, 89, 0.5)"
          }}
          whileTap={{ 
            scale: 0.92,
            backgroundColor: "rgba(197, 160, 89, 0.25)",
            borderColor: "rgba(197, 160, 89, 1)",
            boxShadow: "0 0 30px rgba(197, 160, 89, 0.5)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={cn(
            "flex flex-col items-center justify-center w-full h-full transition-colors duration-200 border",
            variant === "circular" ? "rounded-full" : "rounded-xl",
            "border-primary/30"
          )}
        >
          <span className="rune-glow select-none">{rune}</span>
          {size !== "sm" && (
            <span className="text-[8px] uppercase tracking-[2px] opacity-40 mt-1 font-sans">
              {label}
            </span>
          )}
        </motion.div>
      </TooltipTrigger>
      <TooltipContent className="bg-stone-900 border-primary/30 text-primary">
        <p className="font-heading text-xs tracking-widest uppercase">{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};
