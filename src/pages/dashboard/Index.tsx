import Inventory from "./Inventory";

const Dashboard: React.FC = () => {
  return (
    <main className="lg:px-7 px-5 lg:pt-9 pt-[120px] font-inter grid gap-[37px]">
      {/* <Progress /> */}
      <Inventory />
      {/* <Testimonial /> */}
    </main>
  );
};

export default Dashboard;
