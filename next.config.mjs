/* Legacy URLs from the four-pillar site. Permanent redirects keep old links and search results working. */
const nextConfig = {
  async redirects() {
    return [
      { source: "/solutions", destination: "/what-we-solve", permanent: true },
      { source: "/solutions/intelligence", destination: "/what-we-solve#business-intelligence", permanent: true },
      { source: "/solutions/digital", destination: "/what-we-solve#digital-systems", permanent: true },
      { source: "/solutions/ai", destination: "/what-we-solve#ai-automation", permanent: true },
      { source: "/solutions/academy", destination: "/resources#training", permanent: true },
      { source: "/solutions/:slug*", destination: "/what-we-solve", permanent: true },
      { source: "/case-studies/ai-case-study", destination: "/case-studies", permanent: true },
      { source: "/industries", destination: "/#who-we-work-with", permanent: true },
    ];
  },
};
export default nextConfig;
