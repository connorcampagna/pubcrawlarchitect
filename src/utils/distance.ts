// Utility functions for calculating distances and routes

/**
 * Calculate the distance between two coordinates using the Haversine formula
 * @param lat1 Latitude of point 1
 * @param lon1 Longitude of point 1
 * @param lat2 Latitude of point 2
 * @param lon2 Longitude of point 2
 * @returns Distance in meters
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

/**
 * Estimate walking time based on distance
 * @param distanceInMeters Distance in meters
 * @returns Estimated time in minutes (assuming 5 km/h walking speed)
 */
export function estimateWalkingTime(distanceInMeters: number): number {
  const walkingSpeedKmh = 5;
  const walkingSpeedMs = (walkingSpeedKmh * 1000) / 60; // meters per minute
  return Math.ceil(distanceInMeters / walkingSpeedMs);
}

/**
 * Format distance for display
 * @param meters Distance in meters
 * @returns Formatted string (e.g., "1.2 km" or "450 m")
 */
export function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${Math.round(meters)} m`;
  }
  return `${(meters / 1000).toFixed(1)} km`;
}
