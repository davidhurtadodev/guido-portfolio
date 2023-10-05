export default function ScreenContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col bg-[url('/assets/images/bg-hero.png')]  bg-left-bottom bg-[length:130%] bg-no-repeat lg:bg-[right_bottom] lg:bg-[auto_100vh]">
      {children}
    </div>
  );
}
