export interface SubscriptionPrices {
    src: string;
    years: string;
    price: number
}

export const subscriptionPrices:SubscriptionPrices[] = [
    {
      years: "0-2",
      src: "../assets/images/image1.png",
      price: 1099
    },
    {
      years: "2-5",
      src: "../assets/images/image2.png",
      price: 1799
    },
    {
      years: "5-10",
      src: "../assets/images/image3.png",
      price: 2499
    },
    {
      years: "0-2",
      src: "../assets/images/image5.png",
      price: 3299
    }
]

export interface CardData {
  src:string;
  title: string;
  para:string
}

export const cardData: CardData[] = [
  {
    src:"../assets/images/oldman.png",
    para: "For professional/leadership roles with 15+ years of industry experience and special requirements",
    title: "Specialized Interview"
  },
  {
    src:"../assets/images/interviews.png",
    para: "Practice with our predefined templates and AI based interviews",
    title: "Oneway Interview"
  },
] 