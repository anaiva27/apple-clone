import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useRef } from "react";

const Features = () => {
	const videoRef = useRef();
	useGSAP(() => {
		animateWithGsap("#features_title", { y: 0, opacity: 1 });
		animateWithGsap(
			".g_grow",
			{ scale: 1, opacity: 1, ease: "power1" },
			{ scrub: 5.5 }
		);
	});
	return (
		<section className="h-full common-padding bg-zinc relative overflow-hidden">
			<div className="screen-max-width">
				<div className="mb-12 w-full">
					<h1
						id="features_title"
						className="section-heading"
					>
						Explore the full story.
					</h1>
				</div>
				<div className="flex flex-col justify-center items-center overflow-hidden">
					<div className="mt-32 mb-24 pl-24">
						<h2 className="text-5xl sm:text-7xl font-semibold">iPhone</h2>
						<h2 className="text-5xl sm:text-7xl font-semibold">
							Forged in titanium
						</h2>
					</div>
					<div className="flex-center flex-col sm:px-10">
						<div className="relative h-[50vh] w-full flex items-center">
							<video
								playsInline
								id="exploreVideo"
								className="w-full h-full object-cover object-center"
								muted
								autoPlay
								ref={videoRef}
								preload="none"
								src={exploreVideo}
								type="video/mp4"
							/>
						</div>
						<div className="flex flex-col w-full relative">
							<div className="feature-video-container">
								<div className="overflow-hidden flex-1 h-[50vh]">
									<img
										src={explore1Img}
										className="feature-video g_grow"
										alt="titanium"
									/>
								</div>
								<div className="overflow-hidden flex-1 h-[50vh]">
									<img
										src={explore2Img}
										className="feature-video g_grow"
										alt="titanium"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
