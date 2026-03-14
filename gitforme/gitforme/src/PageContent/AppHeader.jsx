import { GitHubIcon, LoginIcon, LogoutIcon , CoffeeIcon} from "../components/Iconsfile";
import menuIcon from "../assets/menu-icon.png"
import searchIcon from "../assets/search-icon.png"
import { useState } from "react";

export const AppHeader = ({ isAuthenticated, user, onLogout, onLogin, repoUrl, setRepoUrl, oncook }) => {
    // ...existing code...

    return (
        <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-xl border-b-2 border-black">
            <div className="container mx-auto px-4 md:px-8 py-3">
                <div className="flex justify-between items-center gap-4">
                    <a
                        href="/"
                        className="text-2xl sm:text-3xl font-bold tracking-tighter sm:block font-space-mono text-gray-900 hover:text-amber-600 transition-colors"
                    >
                        RepoMind
                    </a>
                    <div className="flex-grow flex gap-2">
                        <input
                            type="text"
                            value={repoUrl}
                            onChange={(e) => setRepoUrl(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && oncook()}
                            placeholder="Paste a GitHub repo URL to analyze..."
                            className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-gray-500"
                            aria-label="Repository URL"
                        />
                        <button onClick={oncook} className="bg-[#F9C79A] text-black font-bold px-6 py-2 border-2 border-black rounded-lg hover:bg-amber-400 transition-colors shadow-[3px_3px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 whitespace-nowrap">
                            cook
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
// ...existing code...
    
};
