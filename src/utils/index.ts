/**
 * Utility Functions Index
 * Central export for all utility functions
 */

// Date utilities
export { formatDate, formatRelativeDate, getReadingTime } from './date';

// Reading time utilities (enhanced version)
export {
    getReadingTime as calculateReadingTime,
    formatReadingTime,
    getRemainingReadingTime,
} from './reading-time';
