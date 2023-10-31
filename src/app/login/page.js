import Link from "next/link";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <br />
      <Link href="/about">Go to about page </Link>
      <br />
      <Link href="/">Go to Home page</Link>
    </div>
  );
};

export default Login;

export function generateMetadata() {
  return {
    title: "Login Page ",
    description: "this is login page ",
  };
}
