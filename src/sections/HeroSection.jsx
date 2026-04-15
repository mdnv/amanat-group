import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import gsap from "gsap";

const slidesData = [
  {
    image: "https://images.unsplash.com/photo-1768069794857-b4690ab163a3?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=2600",
    video: "/videos/video-hero-section.mp4"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2600",
    video: null
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2600",
    video: null
  }
];

let hasPlayedInitialAnimation = false;

function HeroSection() {
  const { t } = useTranslation();
  const slides = t("hero.slides", { returnObjects: true }) || [];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const videoRef = useRef(null);
  const textContainerRef = useRef(null);
  const bgContainerRef = useRef(null);
  const [showVideo, setShowVideo] = useState(!hasPlayedInitialAnimation && currentSlide === 0);

  const animateSlideIn = (index) => {
    if (!textContainerRef.current) return;
    
    setIsTransitioning(true);
    
    // Animate current text out
    gsap.to(textContainerRef.current.children, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.in",
      onComplete: () => {
        setCurrentSlide(index);
        setShowVideo(!hasPlayedInitialAnimation && index === 0);
        
        // Reset position for new text
        gsap.set(textContainerRef.current.children, { opacity: 0, y: 20 });
        
        // Animate new text in
        gsap.to(textContainerRef.current.children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          onComplete: () => setIsTransitioning(false)
        });
      }
    });

    // Animate background transition
    if (bgContainerRef.current) {
        gsap.fromTo(bgContainerRef.current, 
            { filter: "brightness(1)" }, 
            { filter: "brightness(0.5)", duration: 0.4, yoyo: true, repeat: 1 }
        );
    }
  };

  useEffect(() => {
    // Initial animation
    if (!hasPlayedInitialAnimation) {
      if (textContainerRef.current) {
        gsap.set(textContainerRef.current.children, { opacity: 0, y: 20 });
      }

      const video = videoRef.current;
      if (video) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              video.play().catch((err) => console.log("Auto-play prevented", err));
              observer.disconnect();
            }
          },
          { threshold: 0.2 }
        );
        observer.observe(video);

        const handleVideoEnd = () => {
          hasPlayedInitialAnimation = true;
          gsap.to(textContainerRef.current.children, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          });
        };
        video.addEventListener("ended", handleVideoEnd);
        return () => {
          observer.disconnect();
          video.removeEventListener("ended", handleVideoEnd);
        };
      } else {
        // Fallback if no video
        gsap.to(textContainerRef.current.children, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        });
        hasPlayedInitialAnimation = true;
      }
    } else {
      // Ensure text is visible if animation already played
      if (textContainerRef.current) {
        gsap.set(textContainerRef.current.children, { opacity: 1, y: 0 });
      }
    }
  }, []);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        const nextSlide = (currentSlide + 1) % slides.length;
        animateSlideIn(nextSlide);
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [currentSlide, isTransitioning, slides.length]);

  const goToSlide = (index) => {
    if (index === currentSlide || isTransitioning) return;
    animateSlideIn(index);
  };

  const slide = slides[currentSlide] || {};
  const currentBg = slidesData[currentSlide] || slidesData[0];

  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden sm:min-h-[820px] lg:min-h-[921px]">
      <div ref={bgContainerRef} className="absolute inset-0 z-0 transition-all duration-1000">
        <img
          key={currentBg.image}
          alt={slide.title}
          className="h-full w-full object-cover opacity-90 saturate-[0.72] brightness-[0.72] contrast-[0.92] transition-opacity duration-1000"
          src={currentBg.image}
          loading="eager"
        />
        {showVideo && currentBg.video && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-90 saturate-[0.72] brightness-[0.72] contrast-[0.92]"
            src={currentBg.video}
            muted
            playsInline
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,17,58,0.34),rgba(0,17,58,0.48))] sm:bg-[linear-gradient(180deg,rgba(0,17,58,0.22),rgba(0,17,58,0.32))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,17,58,0.98),rgba(0,17,58,0.92)_48%,rgba(0,17,58,0.36)_100%)] sm:bg-gradient-to-r sm:from-[rgba(0,17,58,0.96)] sm:via-[rgba(0,17,58,0.84)] sm:to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)] sm:bg-none" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div ref={textContainerRef} className="py-24 text-white sm:py-28 lg:py-32">
          <span className="mb-5 inline-block rounded-sm bg-[var(--color-secondary-fixed-dim)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#241a00] sm:mb-6 sm:text-[0.75rem] sm:tracking-[0.16em]">
            {slide.eyebrow}
          </span>
          <h1 className="max-w-[16ch] text-[2.65rem] font-extrabold leading-[0.98] tracking-[-0.055em] sm:max-w-[14ch] sm:text-5xl sm:leading-[1.02] md:text-7xl">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-[32rem] text-base leading-7 text-white/86 sm:mt-8 sm:max-w-lg sm:text-xl sm:font-light sm:leading-relaxed md:text-2xl">
            {slide.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-6">
            <Link to={slide.linkPrimary} className="w-full sm:w-auto">
              <Button className="w-full bg-[var(--color-secondary)] px-6 py-4 text-base font-bold text-white hover:shadow-xl hover:shadow-[rgba(0,17,58,0.2)] sm:w-auto sm:px-10 sm:py-5 sm:text-lg">
                {slide.ctaPrimary}
              </Button>
            </Link>
            <Link to={slide.linkSecondary} className="w-full sm:w-auto">
              <Button secondary className="w-full border border-white/22 bg-white/5 px-6 py-4 text-base font-bold text-white ring-0 hover:bg-white/10 hover:text-white sm:w-auto sm:px-10 sm:py-5 sm:text-lg">
                {slide.ctaSecondary}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3 sm:left-auto sm:right-8 sm:translate-x-0 lg:right-12">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 transition-all duration-300 ${
              currentSlide === idx 
                ? "w-8 bg-[var(--color-secondary)]" 
                : "w-2 bg-white/40 hover:bg-white/60"
            } rounded-full`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
