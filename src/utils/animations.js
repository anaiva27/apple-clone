export const animateWithGsapTimeline = (
	timeline,
	rotationRef,
	rotationState,
	firstTarget,
	secondTarget,
	animatinProps
) => {
	timeline.to(rotationRef.current.rotation, {
		y: rotationState,
		duration: 1,
		ease: "power2.inOut",
	});
	timeline.to(
		firstTarget,
		{
			...animatinProps,
			ease: "power2.inOut",
		},
		"<"
	);
	timeline.to(
		secondTarget,
		{
			...animatinProps,
			ease: "power2.inOut",
		},
		"<"
	);
};
