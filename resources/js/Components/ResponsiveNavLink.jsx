import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? 'border-indigo-700 bg-gray-900 text-indigo-50 focus:text-gray-900 focus:bg-indigo-300 focus:border-indigo-700'
                    : 'border-transparent text-gray-300 hover:text-indigo-100 hover:bg-gray-700 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300'
            } text-base font-medium focus:outline-none transition-colors ${className}`}
        >
            {children}
        </Link>
    );
}
