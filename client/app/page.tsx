import Link from "next/link";

export default function Home(): JSX.Element {
	return (
		<header id="header">
		    <div className="container">
		      <h1>
			      <Link href="/">Atanas Pozharliev</Link>
			  </h1>

		      <h2>Software Developer & High School Student</h2>

		      <nav id="navbar" className="navbar">
		        <ul>
		          <li>
			          <Link className="active" href="/">Home</Link>
				  </li>
		          <li>
			          <Link href="/about">About</Link>
				  </li>
		          <li>
			          <Link href="/resume">Resume</Link>
				  </li>
		          <li>
			          <Link href="/services">Services</Link>
				  </li>
		          <li>
			          <Link href="/portfolio">Portfolio</Link>
				  </li>
		          <li>
			          <Link href="/contact">Contact</Link>
				  </li>
		        </ul>
		      </nav>

		      <div className="social-links">
					<Link href="mailto:atanas.pozharliev@gmail.com">
						<i className="bi bi-envelope"/>
					</Link>
					<Link href="https://www.linkedin.com/in/atanas-pozharliev/" target="_blank">
						<i className="bi bi-linkedin"/>
					</Link>
					<Link href="https://github.com/ABPozharliev19" target="_blank">
						<i className="bi bi-github"/>
					</Link>
		      </div>

		    </div>
		</header>
	);
}
