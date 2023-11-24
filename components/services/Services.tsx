import {
  Blocks,
  GanttChartSquare,
  Gem,
  MonitorSmartphoneIcon,
  PaletteIcon,
  TabletSmartphoneIcon,
} from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const servicesData = [
  {
    icon: <PaletteIcon size={52} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "I create websites that are both visually appealing and user-friendly. I ensuring that websites are easy to use, navigate, and find, and that they provide a positive user experience.",
  },
  {
    icon: <MonitorSmartphoneIcon size={52} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "I creates websites that are both functional and user-friendly. I ensuring that websites are secure, reliable, and performant, and that they meet the specific needs of users.",
  },
  {
    icon: <TabletSmartphoneIcon size={52} strokeWidth={0.8} />,
    title: "Mobile App Development",
    description:
      "I turn innovative ideas and business needs into functional and engaging mobile applications. I combine my expertise in design, development, and mobile platforms to create apps that enhance user experiences and drive business success.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>

        {/**Grid */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData?.map((item, idx) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[380px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={idx}
              >
                <CardHeader className="text-basic absolute -top-[60px]">
                  <div className="w-[120px] h-[80px] rounded-lg bg-primary/90 flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
