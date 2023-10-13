import Header from "~/components/header/header";

const PremiumPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-red-200 w-screen">
        <Header />
        <div className="mt-[50px]">
          <img
            src="bgpr.png"
            alt="premium"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </>
  );
};
export default PremiumPage;
