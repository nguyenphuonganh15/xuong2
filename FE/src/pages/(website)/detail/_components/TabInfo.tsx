import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabInfo() {
  return (
    <Tabs defaultValue="account" className="">
      <TabsList className="bg-transparent flex justify-between">
        <TabsTrigger
          className="border rounded-3xl data-[state=active]:border-green-600  py-3 px-11 data-[state=active]:text-green-800 data-[state=active]:bg-green-50 border-gray-100"
          value="description"
        >
          Description
        </TabsTrigger>
        <TabsTrigger
          className="border rounded-3xl data-[state=active]:border-green-600  py-3 px-11 data-[state=active]:text-green-800 data-[state=active]:bg-green-50 border-gray-100"
          value="reviews"
        >
          Reviews
        </TabsTrigger>

        <TabsTrigger
          className="border rounded-3xl data-[state=active]:border-green-600  py-3 px-11 data-[state=active]:text-green-800 data-[state=active]:bg-green-50 border-gray-100"
          value="refer"
        >
          Refer a Friend
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="reviews">Change your password here.</TabsContent>
      <TabsContent value="refer">Refer.</TabsContent>
    </Tabs>
  );
}
