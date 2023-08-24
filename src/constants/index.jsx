import { SocialMediaProfiles } from "../app/components/SocialMedia";

export const navigation = [
  {
    title: "Work",
    links: [
      { title: "Hotelstay", href: "/work/hotelstay" },
      { title: "ProsperMind Learning", href: "/work/prospermindlearning" },
      { title: "Finance Dashboard", href: "/work/dashboardinho" },
      { title: "TimeTravelersAI", href: "/work/timetravelersai" },
    {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
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