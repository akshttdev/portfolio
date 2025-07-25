import { useEffect, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import { slideTextAnim } from "@/animations/anim";

interface PreLoaderProps {
  children: ReactNode;
}

function PreLoader({ children }: PreLoaderProps) {
  const [showChildren, setShowChildren] = useState<boolean>(false);
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);
  const [returnAnimation, setReturnAnimation] = useState<boolean>(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (loadingComplete) {
      setTimeout(() => {
        setReturnAnimation(true);
      }, 750);

      setTimeout(() => {
        setShowChildren(true);
      }, 1000);
    }
  }, [loadingComplete]);

  return (
    <>
      {!showChildren && (
        <div className="page stairs relative noise scrollbar-hide">
          <div className="transition-container !bg-[#020202] h-screen flex items-center justify-center px-6">
            <AnimatePresence mode="wait">
              <div
                key={returnAnimation.toString()}
                className="size-full flex items-center"
              >
                <div className="w-full !h-[150px] flex items-center justify-between overflow-hidden">
                  {!loadingComplete ? (
                    <>
                      <motion.p
                        variants={slideTextAnim}
                        initial="initial"
                        animate="animate"
                        className="hero-txt !text-s"
                      >
                        <CountUp
                          start={0}
                          end={99}
                          duration={0.7}
                          delay={0.25}
                          onEnd={() => setLoadingComplete(true)}
                        />
                      </motion.p>
                      <motion.p
                        variants={slideTextAnim}
                        initial="initial"
                        animate="animate"
                        className="hero-txt !text-s"
                      >
                        0
                      </motion.p>
                    </>
                  ) : (
                    <>
                      <motion.p
                        variants={slideTextAnim}
                        initial="initial"
                        animate={!returnAnimation && "animate"}
                        exit="exit"
                        className="hero-txt !text-s"
                      >
                        100
                      </motion.p>
                      <motion.p
                        variants={slideTextAnim}
                        initial="initial"
                        animate={!returnAnimation && "animate"}
                        exit="exit"
                        className="hero-txt !text-s"
                      >
                        {currentYear}©
                      </motion.p>
                    </>
                  )}
                </div>
              </div>
            </AnimatePresence>
          </div>
        </div>
      )}
      {showChildren && children}
    </>
  );
}

export default PreLoader;
