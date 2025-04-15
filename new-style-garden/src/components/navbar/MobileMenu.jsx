import { NavLink } from "react-router-dom";

export default function MobileMenu({ navigation, setIsMobileMenuOpen }) {
    return (

        <div className="md:hidden px-6 pb-6 bg-gray-50 shadow-md z-40">
            <ul className="flex flex-col gap-2 pt-4 text-gray-800">
                {navigation.map((nav) => (
                    <li key={nav.name}>
                        <NavLink
                            to={nav.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-base text-xl font-medium"
                        >
                            {nav.name}
                        </NavLink>

                        {nav.submenu && (
                            <ul className="ml-1 mt-1 flex flex-col gap-2">
                                {nav.submenu.map((sub, idx) => (
                                    <li key={idx}>
                                        <NavLink
                                            to={sub.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`flex items-center text-lg ${sub.colorClass}`}
                                        >
                                            {sub.icon} {sub.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>

    );
}