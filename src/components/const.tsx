// ----------------------- import Images ---------------------------
import BrandLogo from "../assets/images/logos/logo.svg";
import ComputerImage from "../assets/images/other/image-computer.png";
import DevicesImage from "../assets/images/other/image-devices.png";
import GoogleLogo from "../assets/images/logos/logo-google.png";
import HpLogo from "../assets/images/logos/logo-hp.png";
import IbmLogo from "../assets/images/logos/logo-ibm.png";
import MicrosoftLogo from "../assets/images/logos/logo-microsoft.png";
import VectorGrLogo from "../assets/images/logos/logo-vector-graphics.png";
import BlackListIcon from "../assets/images/icons/icon-blacklist.svg";
import PreviewIcon from "../assets/images/icons/icon-preview.svg";
import TextIcon from "../assets/images/icons/icon-text.svg";
import { FaFacebookSquare, FaInstagram, FaTwitter  } from "react-icons/fa";


//===================== Hero Component Content ==========================
export const HeroContent = {
  logo: BrandLogo,
  heading: "A history of everything you copy",
  subHeading:
    "Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.",
  btn_1: { text: "Download for iOS", link: "" },
  btn_2: { text: "Download for Mac", link: "" },
};

//===================== Service Component Content ==========================
export const ServicesContent = {
  heading: "Keep track of your snippets",
  subheading:
    "Clipboard instantly stores any item you copy in the cloud,meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.",
  image: ComputerImage,
  services: [
    {
      tile: "Quick Search",
      details:
        "Easily search your snippets by content, category, web address, application, and more.",
    },
    {
      tile: "iCloud Sync",
      details: "Instantly saves and syncs snippets across all your devices.",
    },
    {
      tile: "Complete History",
      details:
        "Retrieve any snippets from the first moment you started using the app.",
    },
  ],
};

//===================== Featuring Component Content ==========================
export const FeaturingProductContent = {
  heading: "Access Clipboard anywhere",
  subheading:
    "Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.",
  image: DevicesImage,
};

//===================== Features Component Content ==========================
export const FeaturesContent = {
  heading: "Supercharge your workflow",
  subheading: "We've got the tools to boost your productivity.",
  features: [
    {
      featureIcon: PreviewIcon,
      title: "Create blacklists",
      description:
        "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
    },
    {
      featureIcon: TextIcon,
      title: "Plain text snippets",
      description:
        "Remove unwanted formatting from copied text for a consistent look.",
    },
    {
      featureIcon: BlackListIcon,
      title: "Sneak preview",
      description:
        "Quick preview of all snippets on your Clipboard for easy access.",
    },
  ],
};

//===================== Customers Component Content ==========================
export const CustomersContent = [
  { image: GoogleLogo },
  { image: IbmLogo },
  { image: MicrosoftLogo },
  { image: HpLogo },
  { image: VectorGrLogo },
];

//===================== At page bottom download Component Content ==========================
export const BottomDownloadContent = {
  heading: "Clipboard for iOS and Mac OS",
  subheading:
    "Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.",
  btn_1: { text: "Download for iOS", link: "" },
  btn_2: { text: "Download for Mac", link: "" },
};

//===================== Footer Component Content ==========================
export const FooterContent = {
  logo: BrandLogo,
  navLinks: [
    { linkText: "FAQs", link: "" },
    { linkText: "Contact Us", link: "" },
    { linkText: "Privacy Policy", link: "" },
    { linkText: "Press Kit", link: "" },
    { linkText: "Install Guide", link: "" },
  ],
  socialMedia: [
    { icon: <FaFacebookSquare size={30} className="text-[#4C545C] hover:text-Strong-Cyan transition-all duration-200"/>, link: "" },
    { icon: <FaInstagram size={30} className="text-[#4C545C] hover:text-Strong-Cyan transition-all duration-200"/>, link: "" },
    { icon: <FaTwitter size={30} className="text-[#4C545C] hover:text-Strong-Cyan transition-all duration-200"/>, link: "" },
  ],
};

export const animateVariants = {
  // From left to viewport animation
  fromLeft: {
    stayLeft: { opacity: 0, translateX: '-10vw' },
    normal: { opacity: 1, translateX: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  },

  // Zoom in viewport animation
  zoomIn: {
    staySmall: { scale: 0 },
    normal: { scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  },

  // From right to viewport animation
  fromRight: {
    stayRight: { opacity: 0, translateX: '10vw' },
    normal: { opacity: 1, translateX: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  },

  // From top to viewport animation
  fromTop: {
    stayTop: { translateY: -50, opacity: 0},
    normal: { translateY: 0 ,opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  },

};
