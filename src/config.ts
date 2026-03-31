// Personal data — update these values to match your journey
export const siteConfig = {
  authorName: 'Kris',
  startWeight: 116,      // kg
  goalWeight: 90,        // kg
  currentWeight: 96,     // kg
  startDate: '2023-01-01',
  durationMonths: 27,
};

export const totalLoss = Math.round((siteConfig.startWeight - siteConfig.currentWeight) * 10) / 10;
