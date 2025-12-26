/**
 * Reading Time Utilities
 * Functions for calculating and formatting reading time
 */

const WORDS_PER_MINUTE = 200;
const CODE_WORDS_PER_MINUTE = 100; // Code is read slower

/**
 * Calculate reading time for content
 * @param content - The text content to analyze
 * @returns Reading time in minutes
 */
export function getReadingTime(content: string): number {
    // Remove code blocks for separate counting
    const codeBlockRegex = /```[\s\S]*?```|`[^`]+`/g;
    const codeBlocks = content.match(codeBlockRegex) || [];
    const contentWithoutCode = content.replace(codeBlockRegex, '');

    // Count words in regular content
    const regularWords = contentWithoutCode.trim().split(/\s+/).length;

    // Count words in code blocks
    const codeWords = codeBlocks
        .join(' ')
        .replace(/```\w*\n?/g, '') // Remove code fence markers
        .trim()
        .split(/\s+/).length;

    // Calculate reading time with different rates
    const regularTime = regularWords / WORDS_PER_MINUTE;
    const codeTime = codeWords / CODE_WORDS_PER_MINUTE;

    return Math.ceil(regularTime + codeTime);
}

/**
 * Format reading time for display
 * @param minutes - Reading time in minutes
 * @returns Formatted string (e.g., "5 min read")
 */
export function formatReadingTime(minutes: number): string {
    if (minutes < 1) {
        return 'Less than 1 min read';
    }
    if (minutes === 1) {
        return '1 min read';
    }
    return `${minutes} min read`;
}

/**
 * Estimate remaining reading time based on scroll position
 * @param totalMinutes - Total reading time
 * @param scrollPercentage - Current scroll percentage (0-100)
 * @returns Remaining reading time in minutes
 */
export function getRemainingReadingTime(
    totalMinutes: number,
    scrollPercentage: number
): number {
    const remainingPercentage = Math.max(0, 100 - scrollPercentage) / 100;
    return Math.ceil(totalMinutes * remainingPercentage);
}
