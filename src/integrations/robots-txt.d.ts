export interface RobotsTxtOptions {
  /**
   * Sitemap URL(s) to include in robots.txt
   * @default Automatically generated from site URL
   */
  sitemap?: string | string[];

  /**
   * Allow rules for specific paths
   * @default []
   */
  allow?: string[];

  /**
   * Disallow rules for specific paths
   * @default ['/admin/', '/api/', '/_astro/', '/404/']
   */
  disallow?: string[];

  /**
   * Host directive for the site
   * @default Automatically extracted from site URL
   */
  host?: string;

  /**
   * Additional custom rules to include
   * @default []
   */
  additionalRules?: string[];
}