import { Link } from "react-router-dom";

export type LogoProps = {
    className?: string;
};

export function Logo({ className }: LogoProps) {
    return (
        <Link to="/" className={className}>
            <img src="/logo.webp" alt="logo" />
        </Link>
    );
}
