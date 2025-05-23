import React, { useState, useEffect, useRef } from 'react';
import { Split, Eye, Image as ImageIcon, Grid, Type, Circle, Layout, Play, ArrowUpRight, Camera, Sparkles, Image, CircleOff, GridIcon, RotateCw, LogOut, Settings, User, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IMAGES = {
  hero: '/images/image5.png',
  card1: '/images/image.png',
  card2: '/images/image3.png',
  card3: '/images/01.jpeg',
  carousel1: '/images/02.jpeg',
  carousel2: '/images/03.jpeg',
  carousel3: '/images/04.jpeg',
  grid1: '/images/05.jpeg',
  grid2: '/images/06.jpeg',
  grid3: '/images/07.jpeg',
  fisheye1: '/images/08.jpeg',
  fisheye2: '/images/09.jpeg',
  fisheye3: '/images/010.jpeg',
  circular1: '/images/011.jpeg',
  circular2: '/images/012.jpeg',
  circular3: '/images/013.jpeg'
};

const Home = () => {
  const navigate = useNavigate();
  const popupRef = useRef(null);
  const buttonRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Added state for popup and mock user
  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const mockUser = {
    name: 'John Doe',
    email: 'john@example.com'
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current && 
        !popupRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const sections = [
    {
      title: "Text behind image",
      badges: [
        { label: "LOCAL ENCODE", icon: Camera },
        { label: "MOBILE ML", icon: Sparkles },
        { label: "FAST DECODE", icon: Eye }
      ],
      cards: [
        {
          title: "ENCODE",
          subtitle: "LOCAL IMAGE PROCESSING",
          desc: "Advanced image encoding directly on your device using ONNX Runtime. Our optimized encoder converts your images into efficient tensors for ML processing, all happening locally without any server communication.",
          img: IMAGES.card1
        },
        {
          title: "PROCESS",
          subtitle: "MOBILE ML INFERENCE",
          desc: "Lightning-fast ML model inference powered by ONNX Runtime's mobile acceleration. Processes tensor data using your device's native capabilities, automatically selecting the best hardware acceleration path.",
          img: IMAGES.card2
        },
        {
          title: "DECODE",
          subtitle: "REAL-TIME OUTPUT",
          desc: "Instant decoding of processed tensors back to stunning visuals. Our optimized decoder ensures zero-latency conversion from ML outputs to final images, delivering professional results in milliseconds.",
          img: IMAGES.card3
        }
      ]
    },
    {
      title: "Fish Eye Effect",
      badges: [
        { label: "DISTORTION", icon: CircleOff },
        { label: "REAL-TIME", icon: Eye },
        { label: "ADJUSTABLE", icon: Sparkles }
      ],
      cards: [
        {
          title: "LENS",
          subtitle: "DYNAMIC DISTORTION",
          desc: "Create stunning spherical distortions with our advanced fish-eye algorithm. Adjust the intensity and focal point for unique perspective effects.",
          img: IMAGES.fisheye1
        },
        {
          title: "CONTROL",
          subtitle: "PRECISE ADJUSTMENT",
          desc: "Fine-tune your fish-eye effect with intuitive controls. Adjust radius, intensity, and center point for perfect distortion every time.",
          img: IMAGES.fisheye2
        },
        {
          title: "PREVIEW",
          subtitle: "REAL-TIME RESULTS",
          desc: "See your adjustments instantly with our real-time preview system. Perfect your fish-eye effect before finalizing the transformation.",
          img: IMAGES.fisheye3
        }
      ]
    },
    {
      title: "Image Carousel",
      badges: [
        { label: "SMOOTH SCROLL", icon: RotateCw },
        { label: "RESPONSIVE", icon: Layout },
        { label: "CUSTOMIZABLE", icon: Sparkles }
      ],
      cards: [
        {
          title: "SCROLL",
          subtitle: "SMOOTH NAVIGATION",
          desc: "Create engaging image sequences with our smooth scrolling carousel. Perfect for showcasing multiple images in an interactive gallery.",
          img: IMAGES.carousel1
        },
        {
          title: "LAYOUT",
          subtitle: "FLEXIBLE DESIGN",
          desc: "Customize your carousel layout with multiple display options. Choose from various transition effects and navigation styles.",
          img: IMAGES.carousel2
        },
        {
          title: "RESPONSIVE",
          subtitle: "ADAPTIVE DISPLAY",
          desc: "Automatically adjusts to any screen size while maintaining smooth performance and visual quality across all devices.",
          img: IMAGES.carousel3
        }
      ]
    },
    {
      title: "Instagram Grid Splitter",
      badges: [
        { label: "GRID SPLIT", icon: GridIcon },
        { label: "AUTO ALIGN", icon: Layout },
        { label: "PREVIEW", icon: Eye }
      ],
      cards: [
        {
          title: "SPLIT",
          subtitle: "PRECISE DIVISION",
          desc: "Automatically split your images into perfect Instagram grid layouts. Create stunning multi-post presentations that align seamlessly.",
          img: IMAGES.grid1
        },
        {
          title: "ARRANGE",
          subtitle: "SMART LAYOUT",
          desc: "Intelligent arrangement tools ensure your split images align perfectly on your Instagram profile. Preview the final grid layout before posting.",
          img: IMAGES.grid2
        },
        {
          title: "EXPORT",
          subtitle: "READY TO POST",
          desc: "Export your split images in the correct order with optimal quality settings for Instagram. Includes numbering and guides for posting.",
          img: IMAGES.grid3
        }
      ]
    },
    {
      title: "Circular Text Generator",
      badges: [
        { label: "CIRCULAR TYPE", icon: Type },
        { label: "CUSTOMIZABLE", icon: Circle },
        { label: "EXPORT", icon: ArrowUpRight }
      ],
      cards: [
        {
          title: "CURVE",
          subtitle: "TEXT SHAPING",
          desc: "Transform your text into perfect circles with our advanced circular text generator. Ideal for logos, badges, and creative typography.",
          img: IMAGES.circular1
        },
        {
          title: "CUSTOMIZE",
          subtitle: "FINE CONTROL",
          desc: "Adjust radius, spacing, and direction of your circular text. Fine-tune every aspect of your design with precise controls.",
          img: IMAGES.circular2
        },
        {
          title: "STYLE",
          subtitle: "TYPOGRAPHY OPTIONS",
          desc: "Choose from various fonts and styles to perfect your circular text design. Apply effects and adjustments in real-time.",
          img: IMAGES.circular3
        }
      ]
    }
  ];

  // Added SignInPopup component
  const SignInPopup = () => {
    if (!showPopup) return null;

    return (
      <div ref={popupRef} className="absolute top-14 md:top-20 right-4 md:right-8 w-64 bg-black border border-white/10 shadow-lg">
        {isLoggedIn ? (
          <div className="p-4">
            <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
              <User className="w-6 h-6" />
              <div>
                <div className="font-bold">{mockUser.name}</div>
                <div className="text-sm text-white/60">{mockUser.email}</div>
              </div>
            </div>
            <div className="pt-4 space-y-2">
              <button className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-white/5" onClick={() => navigate('/settings')}>
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-white/5" onClick={() => setIsLoggedIn(false)}>
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <button className="w-full bg-white text-black px-4 py-2 flex items-center justify-center space-x-2" onClick={() => setIsLoggedIn(true)}>
              <span>SIGN IN</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-4 md:px-8 py-4 md:py-6 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="flex justify-between items-center">
          <div 
            className="text-xl md:text-2xl font-bold cursor-pointer" 
            onClick={() => navigate('/')}
          >
            VOID.
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              className="text-gray-400 hover:text-white" 
              onClick={() => navigate('/tools')}
            >
              TOOLS
            </button>
            <button 
              className="text-gray-400 hover:text-white" 
              onClick={() => navigate('/about')}
            >
              ABOUT
            </button>
            <button 
              className="text-gray-400 hover:text-white" 
              onClick={() => navigate('/void-gallery')}
            >
              GALLERY
            </button>
            <div className="relative">
              <button 
                ref={buttonRef}
                className="bg-white text-black px-4 py-1 flex items-center space-x-2"
                onClick={() => setShowPopup(!showPopup)}
              >
                <span>{isLoggedIn ? mockUser.name : 'SIGN IN'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <SignInPopup />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <button 
                className="text-gray-400 hover:text-white text-left" 
                onClick={() => navigate('/tools')}
              >
                TOOLS
              </button>
              <button 
                className="text-gray-400 hover:text-white text-left" 
                onClick={() => navigate('/about')}
              >
                ABOUT
              </button>
              <button 
                className="text-gray-400 hover:text-white text-left" 
                onClick={() => navigate('/void-gallery')}
              >
                GALLERY
              </button>
              <button 
                className="bg-white text-black px-4 py-2 flex items-center space-x-2"
                onClick={() => setShowPopup(!showPopup)}
              >
                <span>{isLoggedIn ? mockUser.name : 'SIGN IN'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-24 md:pt-32 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
              NO FRILLS.
              <br />
              PURE AESTHETIC.
            </h1>
            
            <div className="flex justify-center md:justify-start">
              <button 
                className="flex items-center space-x-3 border border-white/20 bg-white text-black px-6 py-3" 
                onClick={() => navigate('/tools')}
              >
                <Play className="w-5 h-5" />
                <span>Start Uploading</span>
              </button>
            </div>
          </div>

          {/* Feature Card */}
          <div className="w-full md:w-96 bg-black rounded-3xl p-8 text-white relative overflow-hidden group border border-white/10">
            <img 
              src={IMAGES.hero} 
              alt="Abstract Pattern" 
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="relative z-10">
              <div className="mb-4 text-lg font-bold">
                FILL THE VOID.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <button 
                className="flex items-center space-x-2 bg-white text-black px-6 py-3" 
                onClick={() => navigate('/void-gallery')}
              >
                <span>Share your image</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Sections */}
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="px-4 md:px-8 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">{section.title}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {section.badges.map((badge, index) => (
           <div key={index} className="px-4 md:px-6 py-2 border border-white/20 rounded-full text-sm flex items-center space-x-2">
           <badge.icon className="w-4 h-4" />
           <span>{badge.label}</span>
         </div>
       ))}
     </div>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {section.cards.map((card, cardIndex) => (
       <div key={cardIndex} 
            className="bg-black text-white rounded-3xl overflow-hidden group cursor-pointer relative h-80 md:h-96 border border-white/10">
         <img 
           src={card.img} 
           alt={card.title}
           className="absolute top-0 left-0 w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-black/80 p-6 md:p-8 flex flex-col justify-start backdrop-blur-sm">
           <div>
             <h3 className="text-xl md:text-2xl font-bold mb-2">{card.title}</h3>
             <h4 className="text-sm text-white/60 mb-4">{card.subtitle}</h4>
             <p className="text-sm md:text-base text-white/70">{card.desc}</p>
           </div>
         </div>
       </div>
     ))}
   </div>
 </div>
))}
</div>
);
};

export default Home;