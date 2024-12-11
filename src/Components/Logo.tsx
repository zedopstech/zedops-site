import { cn } from '@/lib/utils';
import React from 'react';

const Logo = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return (
            <div 
                ref={ref} 
                className={cn('text-2xl font-extrabold', className)} 
                {...props}
            >
                <h1>
                    Zed<span className="text-orange-400">O</span>ps
                </h1>
            </div>
        );
    }
);

Logo.displayName = 'Logo';

export default Logo;
