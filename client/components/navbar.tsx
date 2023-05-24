import Link from "next/link";

import "./navbar.scss";

export default function Navbar(): JSX.Element {
	return (
		<header id="header" className="header-top">
			<div className="container">

				<h1><Link href="/">Atanas Pozharliev</Link></h1>

				<nav id="navbar" className="navbar navbar-mobile">
					<ul>
						<li><Link className="nav-link" href="/">Home</Link></li>
						<li><Link className="nav-link" href="/about">About</Link></li>
						<li><Link className="nav-link" href="/resume">Resume</Link></li>
						<li><Link className="nav-link" href="/services">Services</Link></li>
						<li><Link className="nav-link" href="/portfolio">Portfolio</Link></li>
						<li><Link className="nav-link" href="/contact">Contact</Link></li>
					</ul>
					<i className="bi bi-list mobile-nav-toggle" />
				</nav>
			</div>
		</header>
	);
}
