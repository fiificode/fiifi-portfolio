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
    icon: <PaletteIcon size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing",
  },
  {
    icon: <MonitorSmartphoneIcon size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing",
  },
  {
    icon: <TabletSmartphoneIcon size={72} strokeWidth={0.8} />,
    title: "Mobile App Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing",
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
                  <div className="w-[140px] h-[80px] rounded-lg bg-primary/90 flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
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
