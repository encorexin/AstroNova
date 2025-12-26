import * as React from 'react';

interface Props {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors in child components and displays a fallback UI
 */
export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    override componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    override render(): React.ReactNode {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm">
                    <p className="font-medium text-destructive">Something went wrong</p>
                    <p className="mt-1 text-muted-foreground">
                        This component failed to load. Please refresh the page.
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

