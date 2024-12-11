import { cn } from '@/lib/utils';
import React from 'react';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Logo = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className }, ref) => {
        return (
            <div 
                ref={ref} 
                className={cn('text-2xl font-extrabold', className)}
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