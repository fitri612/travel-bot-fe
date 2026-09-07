import { cn } from '@/utils';
import { LoaderCircle } from 'lucide-react';

interface LoaderProps {
	className?: string;
}

function Loader({ className }: LoaderProps) {
	return (
		 <div className={cn('flex items-center justify-center h-screen opacity-50', className)}>
      <LoaderCircle className="size-8 animate-spin text-primary" />
    </div>
	);
}

export { Loader };
export type { LoaderProps };
