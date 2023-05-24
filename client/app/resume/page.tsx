import "./page.scss";
import Navbar from "@app/components/navbar";

export default function Page(): JSX.Element {
	return (
		<>
			<Navbar />

			<section id="resume" className="resume section-show">
				<div className="container">

					<div className="section-title">
						<h2>Resume</h2>
						<p>Check My Resume</p>
					</div>

					<div className="row">
						<div className="col-lg-6">
							<h3 className="resume-title">Summary</h3>
							<div className="resume-item pb-0">
								<h4>Atanas Pozharliev</h4>
								<p><em><strong>Innovative and deadline-driven Software Developer with {new Date().getFullYear() - 2019}+ years of experience designing and developing software solutions.</strong></em></p>
								<ul>
									<li>Burgas, Bulgaria</li>
									<li>(359) 894 4486 98</li>
									<li>atanas.pozharliev@gmail.com</li>
								</ul>
							</div>

							<h3 className="resume-title">Education</h3>
							<div className="resume-item">
								<h4>Computer Science @ VSCPI Burgas</h4>
								<h5>2019 - 2024</h5>
								<p><em>Vocational School for Computer Programming and Innovations, Burgas, BG</em></p>
								<ul>
									<li><strong>Data Structures & Algorithms</strong></li>
									<li><strong>Functional & Object-Oriented Programming</strong></li>
									<li><strong>Javascript, .NET Ecosystem, C++, SQL</strong></li>
								</ul>
							</div>

							<h3 className="resume-title">Certifications & Honors</h3>
							<div className="resume-item pb-0">
								<h4 style={{ color: "white" }}>Hackathon @ AUBG - 1st Place </h4>
								<h4 style={{ color: "white" }}>Hackathon @ Asen Zlatarov - 2nd Place</h4>
							</div>
						</div>
						<div className="col-lg-6">
							<h3 className="resume-title">Professional Experience</h3>
							<div className="resume-item">
								<h4>Full Stack Developer @ Strypes</h4>
								<h5>June 2023 - Present</h5>
							</div>
							<div className="resume-item">
								<h4>Junior Full Stack Developer @ Moxylabs</h4>
								<h5>July 2022 - May 2023</h5>
								<ul>
									<li>Manage the existing WordPress & WooCommerce while also adding lots of new features.</li>
									<li>Implement Glovo integration from zero for shipping with WordPress & WooCommerce.</li>
									<li>Implement Elasticsearch from the ground for searching and faceting while replacing most of the SQL logic resulting in speed gains.</li>
									<li>Polish the existing frontend features and add new features using React & Redux.</li>
									<li>Add and automate small to medium scale services.</li>
								</ul>
							</div>
							<div className="resume-item">
								<h4>Frontend Developer Trainee @ Scalefocus Academy</h4>
								<h5>July 2022 - August 2022</h5>
							</div>
							<div className="resume-item">
								<h4>Backend Developer Intern @ A Data Pro</h4>
								<h5>July 2021 - July 2021</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
