import Link from "next/link";

export default function Home(): JSX.Element {
	return (
		<header id="header">
		    <div className="container">
		      <h1>
			      <Link href="index.html">Atanas Pozharliev1</Link>
			  </h1>

		      <h2>Software Developer & High School Student</h2>

		      <nav id="navbar" className="navbar">
		        <ul>
		          <li>
			          <Link className="active" href="#header">Home</Link>
				  </li>
		          <li>
			          <Link href="#about">About</Link>
				  </li>
		          <li>
			          <Link href="#resume">Resume</Link>
				  </li>
		          <li>
			          <Link href="#services">Services</Link>
				  </li>
		          <li>
			          <Link href="#portfolio">Portfolio</Link>
				  </li>
		          <li>
			          <Link href="#contact">Contact</Link>
				  </li>
		        </ul>
		      </nav>

		      <div className="social-links">
					<Link href="#">
				        <i className="bi bi-twitter"/>
					</Link>
					<Link href="#">
				        <i className="bi bi-facebook"/>
					</Link>
					<Link href="#">
				        <i className="bi bi-instagram"/>
					</Link>
					<Link href="#">
				     <i className="bi bi-linkedin"/>
					</Link>
		      </div>

		    </div>
		</header>
	);
}
