import { OrDivider } from "@/components/ui/or-divider";
import { LoginForm } from "./login-form";
import { GoogleLogin } from "./google-login";

const SignInPage = ({ searchParams }: { searchParams: Record<string, string> }) => {
  const { d } = searchParams;

  return (
    <main className="container max-w-md space-y-6 my-8">
      <h1 className="text-xl text-center font-medium tracking-tight text-gray-900 dark:text-gray-100">
        Sign in to your account
      </h1>

      <LoginForm key={d} loadDummyData={!!d} />

      <OrDivider />

      <GoogleLogin />
    </main>
  );
};

export default SignInPage;
