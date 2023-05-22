import "./page.scss";

export default function About(): JSX.Element {
	return (
		<section id="about" className="about section-show">

			<div className="about-me container">
				<div className="section-title">
					<h2>About</h2>
					<p>Learn more about me</p>
				</div>

				<div className="row">
					<div className="col-lg-4" data-aos="fade-right">
						<img src="profile.png" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
						<h3>Hi, I'm Nasko! 👋 </h3>
						<p>
							A <strong> Software Developer </strong> with more than <strong>{new Date().getFullYear() - 2019} years of experience</strong> based in <strong> Bulgaria. </strong>
						</p>
						<div className="row">
							<div className="col-lg-6">
								<ul>
									<li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>22 May 2005</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.pozharliev.dev</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+359 894 448 698</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Burgas, Bulgaria</span></li>
								</ul>
							</div>
							<div className="col-lg-6">
								<ul>
									<li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{new Date().getFullYear() - 2005}</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>High School</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>atanas.pozharliev@gmail.com</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
								</ul>
							</div>
						</div>
						<div className="text">
							<p>
								I have been coding since 7th grade, but have been much more involved since 2019.
							</p>
							<p>
								I love contributing to open-source projects. I also really like helping people out with coding-related problems.
							</p>
						</div>
					</div>
				</div>

			</div>

			<div className="interests container">
				<div className="section-title">
					<p>Fields </p>
				</div>

				<div className="row">
					<div className="col-lg-3 col-md-4">
						<div className="icon-box">
							<h3>Web Development</h3>
						</div>
					</div>

					<div className="col-lg-3 col-md-4">
						<div className="icon-box">
							<h3>Web Scraping</h3>
						</div>
					</div>

					<div className="col-lg-3 col-md-4">
						<div className="icon-box">
							<h3>Data Engineering</h3>
						</div>
					</div>

					<div className="col-lg-3 col-md-4">
						<div className="icon-box">
							<h3>CMS Development</h3>
						</div>
					</div>
				</div>
			</div>

			<div className="interests container">
				<div className="section-title">
					<p>Tech Stack</p>
				</div>

				<div className="row">
					<div className="col-lg-3 col-md-4">
						<div className="icon-box">
							<h3>Python</h3>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 mt-4 mt-md-0">
						<div className="icon-box">
							<h3>TypeScript</h3>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 mt-4 mt-md-0">
						<div className="icon-box">
							<h3>Data & Related</h3>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
						<div className="icon-box">
							<h3>Others</h3>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>Django (DRF) </h3>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>React & Redux</h3>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>PostgreSQL</h3>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>Wordpress & Woocommerce</h3>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>FastAPI</h3>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>Next.js</h3>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>MySQL</h3>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>Strapi</h3>
						</div>
					</div>

					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>Scrapy</h3>
						</div>
					</div>

					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>Express.js, Fastify</h3>
						</div>
					</div>

					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>SQL Server</h3>
						</div>
					</div>

					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>Azure</h3>
						</div>
					</div>

					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>Selenium</h3>
						</div>
					</div>

					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>Node.js</h3>
						</div>
					</div>

					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>Elasticsearch</h3>
						</div>
					</div>

					<div className="col-lg-3 col-md-4 mt-4">
						<div className="icon-box">
							<h3>Docker</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
