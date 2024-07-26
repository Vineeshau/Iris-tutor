import { Card, CardHeader, CardContent } from "@/Components/ui/card";

export default function HeroFour() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-7xl w-full mx-auto text-center">
        <h3 className="text-3xl lg:text-5xl font-medium text-gray-900 text-center py-10">
          Why <span className="text-[#22577A]">Iris Tutor</span> ?
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl w-full mx-auto">
        {/* Column 1 */}
        <div className="p-4 rounded-lg space-y-4">
          <Card className="flex flex-col items-center md:flex-row">
            <CardHeader className="p-2 flex-shrink-0">
              <img
                src="/course.svg"
                alt="Project"
                width="180"
                height="180"
                className="aspect-video max-w-full"
              />
            </CardHeader>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold">
                Custom Course Exploration
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center md:flex-row">
            <CardHeader className="p-2 flex-shrink-0">
              <img
                src="/bullets.svg"
                alt="Project"
                width="180"
                height="180"
                className="aspect-video max-w-full"
              />
            </CardHeader>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold">Bulletin</div>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center md:flex-row">
            <CardHeader className="p-2 flex-shrink-0">
              <img
                src="/collaborate.svg"
                alt="Project"
                width="180"
                height="180"
                className="aspect-video max-w-full"
              />
            </CardHeader>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold">Collaborate</div>
            </CardContent>
          </Card>
        </div>
        {/* Column 2 */}
        <div className="p-4 rounded-lg space-y-4">
          <Card className="flex flex-col items-center md:flex-row">
            <CardHeader className="p-2 flex-shrink-0">
              <img
                src="/ai.svg"
                alt="Project"
                width="180"
                height="180"
                className="aspect-video max-w-full"
              />
            </CardHeader>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold">
                AI Assessment Analyzer
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center md:flex-row">
            <CardHeader className="p-2 flex-shrink-0">
              <img
                src="/course-exploration.svg"
                alt="Project"
                width="180"
                height="180"
                className="aspect-video max-w-full"
              />
            </CardHeader>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold">Course Exploration</div>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center md:flex-row">
            <CardHeader className="p-2 flex-shrink-0">
              <img
                src="/adduser.svg"
                alt="Project"
                width="180"
                height="180"
                className="aspect-video max-w-full"
              />
            </CardHeader>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold">Add Users</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
