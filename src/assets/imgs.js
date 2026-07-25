const images = import.meta.glob(
	"./images/*.{png,jpg,jpeg,webp}",
	{
		eager: true,
		import: "default"
	}
);

export default images;