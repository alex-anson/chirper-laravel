import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition-colors focus:outline-none focus:border-indigo-200 ' +
                (active
                    ? 'border-indigo-400 text-indigo-200 '
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300 focus:text-gray-200 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
