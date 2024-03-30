import { SocialMediaProfiles } from "../app/components/SocialMedia";

export const navigation = [
  {
    title: "Work",
    links: [
      { title: "Hotelstay", href: "https://github.com/jeanmax1me/hotelstay", target: "_blank", rel: "noopener noreferrer" },
      { title: "ProsperMind Learning", href: "https://github.com/jeanmax1me/prospermindlearning", target: "_blank", rel: "noopener noreferrer" },
      { title: "Finance Dashboard", href: "https://github.com/jeanmax1me/dashboardinho", target: "_blank", rel: "noopener noreferrer" },
      { title: "TimeTravelersAI", href: "https://github.com/jeanmax1me/TimeTravelersAI", target: "_blank", rel: "noopener noreferrer" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "https://github.com/jeanmax1me", 
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];