import Link from "next/link"

const About = () => {
  return (
    <div>
    <h1>About</h1>
    <br/>
    <Link href="/login">Go to LoginPage</Link>
    <br/>
    <Link href="/">Go to Home page</Link>
    </div>
  )
}

export default About

export function generateMetadata() {
  return {
    title: "About Page ",
    description: "this is About  page ",
  };
}