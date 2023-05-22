import "./global.scss";
import "./page.scss";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en">
			<head>
				<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

				<link href="css/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
				<link href="css/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
				<link href="css/boxicons/css/boxicons.min.css" rel="stylesheet" />
				<link href="css/glightbox/css/glightbox.min.css" rel="stylesheet" />
				<link href="css/remixicon/remixicon.css" rel="stylesheet" />
				<link href="css/swiper/swiper-bundle.min.css" rel="stylesheet" />

				<script src="js/main.js" defer />
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}
