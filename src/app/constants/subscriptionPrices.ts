export interface SubscriptionPrices {
    src: string;
    years: string;
    price: number
}

export const subscriptionPrices:SubscriptionPrices[] = [
    {
      years: "0-2",
      src: "/assets/images/image1.svg",
      price: 1099
    },
    {
      years: "2-5",
      src: "/assets/images/image2.svg",
      price: 1799
    },
    {
      years: "5-10",
      src: "/assets/images/image3.svg",
      price: 2499
    },
    {
      years: "0-2",
      src: "/assets/images/image4.svg",
      price: 3299
    }
]

export interface CardData {
  imagePath:string;
  title: string;
  description:string
}

export const cardData: CardData[] = [
  {
    imagePath:"/assets/images/oldman.png",
    description: "For professional/leadership roles with 15+ years of industry experience and special requirements",
    title: "Specialized Interview"
  },
  {
    imagePath:"/assets/images/interviews.png",
    description: "Practice with our predefined templates and AI based interviews",
    title: "Oneway Interview"
  },
] 