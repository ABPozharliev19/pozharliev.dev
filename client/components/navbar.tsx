"use client";

import Link from "next/link";

import { useState } from "react";

import "./navbar.scss";

export default function Navbar(): JSX.Element {
	const [isNavbarClicked, setIsNavbarClicked] = useState(false);

	return (
		<header id="header" className="header-top">
			<div className="container">

				<h1><Link href="/">Atanas Pozharliev</Link></h1>

				<nav id="navbar" className={`${isNavbarClicked ? "navbar-mobile" : "navbar"}`}>
					<ul>
						<li><Link className="nav-link" href="/">Home</Link></li>
						<li><Link className="nav-link" href="/about">About</Link></li>
						<li><Link className="nav-link" href="/resume">Resume</Link></li>
						<li><Link className="nav-link" href="/services">Services</Link></li>
						<li><Link className="nav-link" href="/portfolio">Portfolio</Link></li>
						<li><Link className="nav-link" href="/contact">Contact</Link></li>
					</ul>
					<i className="bi bi-list mobile-nav-toggle" onClick={() => { setIsNavbarClicked(!isNavbarClicked); }} />
				</nav>
			</div>
		</header>
	);
}
