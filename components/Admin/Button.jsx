import Link from "next/link";

const Button = ({ children, href, className }) => {
    if(href) {
        return (
            <Link href={href} className={"bg-white font-bold text-primary flex items-center justify-center px-8 py-1 w-fit rounded-md " + className}>
                {children}
            </Link>
        );        
    }
    return (
        <button className={"bg-white font-bold text-primary flex items-center justify-center px-8 py-1 w-fit rounded-md " + className}>
            {children}
        </button>
    );
}
 
export default Button;