import { Briefcase } from "lucide-react";
import DevImg from "../devImg/DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { infoData, skillData, workData } from "./data";
import { Key } from "react";

const About = () => {
  const getData = (arr: any[], title: any) => {
    return arr.find((item: any) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row ">
          {/**Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyle="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative"
              imgSrc="/images/my-pic.png"
            />
          </div>
          {/**Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full xl:grid xl:grid-cols-3 xl:max-w-[520px] xl:border">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="experience">
                  Experience
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/**Tab content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/**Personal Info */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-4 font-bold text-basic">Summary</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Seasoned Frontend Software Developer with an extensive
                      background spanning 3+ years, adept at crafting sleek,
                      responsive web interfaces. Proficient in cutting-edge
                      frontend technologies and frameworks, dedicated to
                      delivering superior code quality while ensuring seamless
                      user experiences. Skilled collaborator, adept at
                      translating design concepts into intuitive and visually
                      captivating digital solutions.
                    </p>
                    {/**Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData?.map((item, idx) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={idx}
                          >
                            <div className="text-basic">{item.icon}</div>
                            <div className="text-primary">{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/**languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-basic">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Fante, Ga</div>
                    </div>
                  </div>
                </TabsContent>
                {/** Experience */}
                <TabsContent value="experience">
                  <div>
                    <h3 className="mb-8 font-bold text-basic text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/**work experiences */}
                    <div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(workData, "work").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(workData, "work").data.map(
                            (
                              item: { company: any; jobTitle: any; years: any },
                              idx: Key | null | undefined
                            ) => {
                              const { company, jobTitle, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group bg-yellow-50"
                                  key={idx}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-basic absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {jobTitle}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/** Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-8 font-bold text-basic">My TechStacks</h3>
                    <div>
                      <h4 className=" text-xl font-semibold border-b border-border mb-4">
                        Programming Languages/Libraries
                      </h4>
                      <div className="mb-16">
                        {getData(skillData, "skills").data.map(
                          (
                            item: { name: any },
                            idx: Key | null | undefined
                          ) => {
                            const { name } = item;
                            return (
                              <div
                                key={idx}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="font-normal text-muted-foreground">
                                  {name}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                      {/**Tools */}
                      <div>
                        <h4 className="text-xl font-semibold mb-2 xl:text-left">
                          Tools
                        </h4>
                        <div className="border-b border-border mb-4"></div>
                        <div className="flex gap-x-8 justify-center xl:justify-start">
                          {getData(skillData, "tools").data.map(
                            (
                              item: { name: any },
                              idx: Key | null | undefined
                            ) => {
                              const { name } = item;
                              return (
                                <div className="group" key={idx}>
                                  <div className="w-[24px] text-primary group-hover:text-basic animate-bounce">
                                    {name}
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
