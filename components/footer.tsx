import { cn } from "@/lib/utils";

const Footer = () => {
	return (
		<footer className="bottom-0 p-5 mt-10 w-full flex flex-col items-center justify-center bg-background">
			<hr className="w-full border-border mb-5" />
			<h1 className="text-xs text-center">
				&copy; {new Date().getFullYear()} Qagura. All rights reserved.
			</h1>
		</footer>
	);
};

export default Footer;
