import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RuneButton } from "./components/RuneButton";

export default function App() {
  const [lastAction, setLastAction] = useState<string | null>(null);

  const handleAction = (action: string) => {
    setLastAction(action);
    console.log(`Sending command: ${action}`);
    setTimeout(() => {
      setLastAction((prev) => (prev === action ? null : prev));
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 overflow-x-hidden bg-background text-foreground font-heading">
      
      {/* Title Mark Background */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 title-mark select-none text-4xl md:text-6xl opacity-5">
        FUTHARK
      </div>

      <div className="relative w-full max-w-[400px] md:max-w-5xl flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] gap-8 md:gap-12">
        
        {/* Status Bar */}
        <div className="absolute -top-12 md:-top-16 left-0 w-full flex justify-between items-end pb-2 md:pb-4 status-bar">
          <div className="text-[10px] md:text-sm font-medium">ᛗᛁᛞᚷᚨᚱᚦ᛫ᛚᛁᚾᚲ (MIDGARD LINK)</div>
          <div className="flex gap-1 md:gap-1.5">
            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary" />
            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary" />
            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary" />
            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary/30" />
          </div>
        </div>

        {/* Left Sidebar / Top Controls on Mobile */}
        <div className="flex flex-row md:flex-col justify-center md:justify-between py-4 md:py-8 border-b md:border-b-0 md:border-r border-primary/30 px-4 md:px-0 md:pr-8 gap-8">
          <div className="vertical-text hidden md:block">STYRNING</div>
          <div className="flex flex-row md:flex-col gap-6 md:gap-8 items-center">
            <RuneButton 
              rune="ᛗ" 
              label="Meny" 
              onClick={() => handleAction("Menu")}
              variant="square"
              size="lg"
              isActive={lastAction === "Menu"}
            />
            <RuneButton 
              rune="ᛟ" 
              label="Hem" 
              onClick={() => handleAction("Home")}
              variant="square"
              size="lg"
              isActive={lastAction === "Home"}
            />
          </div>
          <div className="h-0 md:h-24 hidden md:block" /> {/* Spacer */}
        </div>

        {/* Center Stage */}
        <div className="flex flex-col items-center justify-center relative border border-primary/10 rounded-[30px] md:rounded-[40px] bg-primary/[0.02] py-12 md:py-0 min-h-[450px] md:min-h-0">
          
          {/* Action Feedback Overlay */}
          <div className="absolute top-6 md:top-8 h-8">
            <AnimatePresence mode="wait">
              {lastAction && (
                <motion.div
                  key={lastAction}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase font-medium"
                >
                  {lastAction}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Touch Pad (D-Pad) */}
          <motion.div 
            animate={{
              borderColor: lastAction ? "rgba(197, 160, 89, 0.6)" : "rgba(197, 160, 89, 0.4)",
              boxShadow: lastAction ? "0 0 40px rgba(197, 160, 89, 0.1)" : "0 0 0px rgba(0,0,0,0)",
              scale: lastAction ? 1.01 : 1
            }}
            className="relative w-64 h-64 md:w-80 md:h-80 border-2 rounded-full flex items-center justify-center transition-all duration-500"
          >
            <RuneButton 
              rune="ᛏ" 
              label="Upp" 
              onClick={() => handleAction("Up")}
              className="absolute top-2 md:top-4"
              size="md"
              isActive={lastAction === "Up"}
            />
            <RuneButton 
              rune="ᛒ" 
              label="Ner" 
              onClick={() => handleAction("Down")}
              className="absolute bottom-2 md:bottom-4"
              size="md"
              isActive={lastAction === "Down"}
            />
            <RuneButton 
              rune="ᛚ" 
              label="Vänster" 
              onClick={() => handleAction("Left")}
              className="absolute left-2 md:left-4"
              size="md"
              isActive={lastAction === "Left"}
            />
            <RuneButton 
              rune="ᚱ" 
              label="Höger" 
              onClick={() => handleAction("Right")}
              className="absolute right-2 md:right-4"
              size="md"
              isActive={lastAction === "Right"}
            />
            <RuneButton 
              rune="ᚦ" 
              label="Välj" 
              onClick={() => handleAction("Select")}
              size="xl"
              className="border-2 border-primary scale-90 md:scale-100"
              isActive={lastAction === "Select"}
            />
          </motion.div>

          {/* Secondary Controls */}
          <div className="mt-8 md:mt-12 flex gap-12 md:gap-16">
            <RuneButton 
              rune="ᚹ" 
              label="Spela" 
              onClick={() => handleAction("Play")}
              size="lg"
              className="border-none"
              isActive={lastAction === "Play"}
            />
            <RuneButton 
              rune="ᚾ" 
              label="Pausa" 
              onClick={() => handleAction("Pause")}
              size="lg"
              className="border-none"
              isActive={lastAction === "Pause"}
            />
          </div>
        </div>

        {/* Right Sidebar / Bottom Controls on Mobile */}
        <div className="flex flex-row md:flex-col justify-center md:justify-between py-4 md:py-8 border-t md:border-t-0 md:border-l border-primary/30 px-4 md:px-0 md:pl-8 gap-8">
          <div className="flex flex-row md:flex-col gap-6 md:gap-8 items-center">
            <RuneButton 
              rune="ᛉ" 
              label="Vol +" 
              onClick={() => handleAction("Volume Up")}
              variant="square"
              size="md"
              className="w-14 h-14 md:w-16 md:h-16"
              isActive={lastAction === "Volume Up"}
            />
            <RuneButton 
              rune="ᛜ" 
              label="Vol -" 
              onClick={() => handleAction("Volume Down")}
              variant="square"
              size="md"
              className="w-14 h-14 md:w-16 md:h-16"
              isActive={lastAction === "Volume Down"}
            />
          </div>
          <div className="vertical-text mt-auto hidden md:block">APPLE TV REMOTE</div>
          <div className="text-[10px] uppercase tracking-[4px] text-primary/50 md:hidden">Volym</div>
        </div>

      </div>
    </div>
  );
}
