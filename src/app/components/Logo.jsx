import clsx from "clsx";
import Link from "next/link";

const Logo = ({ invert, href, className, children, ...props }) => {
    className = clsx(
        className, 
        invert ? "text-white hover:text-[#9a61a9]" : "text-black hover:text-[#6c7af7]"
    );
    const inner = <span className="relative">{children}</span>;
    if (href) {
        return (
            <Link href={href} className={className} {...props}>{inner}</Link>)
    }
    return (
        <h2 className={clsx("cursor-pointer text-2xl font-semibold duration-300", className)}
            {...props}>{inner}</h2>
    )
}

export default Logo;