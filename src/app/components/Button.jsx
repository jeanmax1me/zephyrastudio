import Link from "next/link";
import clsx from "clsx";

function Button({invert,href,className,children, ...props}) {
  className = clsx(className, "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition", invert ? "text-white hover:bg-neutral-800" : "text-neutral-950 hover:bg-yolo3"
  );
  let inner = <span>{children}</span>
  if(href){
    return(
        <Link href={href} className={className} {...props}>{inner}</Link>
    );
  }
    return (
    <button className={className} {...props}>{inner}</button>
  )
}

export default Button