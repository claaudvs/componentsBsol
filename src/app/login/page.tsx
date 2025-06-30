import { Clip, Footer, LoginForm, Title } from "./ui";

export default function LoginPage() {
  return (
    <div className="p-8 h-screen bg-[#6000DA] ">
      <div className="flex flex-row items-center justify-evenly h-9/9">
        <div>
          <Title />
          <Clip />
        </div>
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}