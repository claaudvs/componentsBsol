import { Clip, Footer, LoginForm, Title } from "./ui";

export default function LoginPage() {
  return (
    <div className="p-8 h-screen bg-linear-to-b from-[#6000DA] from-70% to-[#2F007A] to-100%">
      <div className="flex flex-row items-center justify-evenly h-9/9 px-14">
        <div className="flex flex-col items-center xs::w-[100%]  sm:w-[100%] md:w-[100%] lg:w-[45%] xl:w-[45%]">
          <Title />
          <LoginForm />
        </div>
        <div className="hidden lg:block">
          <Clip />
        </div>
      </div>
      <Footer />
    </div>
  );
}
