/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{ts,tsx,html}"],
    theme: {
        extend: {
            colors: {
                green: {
                    cart: "#006854",
                    "cart-light": "#057660",
                },
            },
            boxShadow: {
                nav: "rgba(0,0,0,.1) 0px 0px 8px",
            },
        },
    },
    plugins: [],
};
