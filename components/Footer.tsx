import React from "react";
import GitHubLogo from "./icons/GitHubLogo";

const Footer = () => {
    return (
        <footer className="w-full p-6 text-lg font-light text-gray-200">
            <div className="p-20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-900 rounded-3xl">
                <div className="space-x-1 text-center">
                    <span>An open-source project by</span>
                    <a
                        href="https://cal.com"
                        className="font-cal-sans"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="Visit Cal.com"
                    >
                        Cal.com
                    </a>
                </div>
                <div></div>
                <a
                    href="https://github.com/calcom/synclinear.com"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-100 sm:order-first"
                    aria-label="Visit codebase"
                >
                    <GitHubLogo />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

