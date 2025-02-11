import { useEffect, useState } from 'react';

export function useNetworkTraffic() {
  const [traffic, setTraffic] = useState<string[]>([]);

  useEffect(() => {
    const handleResourceTiming = () => {
      const entries = performance.getEntriesByType('resource');
      const newTraffic = entries.map((entry) => {
        const resource = entry as PerformanceResourceTiming;
        return `${resource.name} - ${resource.initiatorType} - ${resource.duration.toFixed(2)}ms`;
      });
      setTraffic(newTraffic);
    };

    // Listen for new resource timing entries
    const observer = new PerformanceObserver((list) => {
      handleResourceTiming();
    });
    observer.observe({ entryTypes: ['resource'] });

    // Initial load
    handleResourceTiming();

    return () => {
      observer.disconnect();
    };
  }, []);

  console.log(traffic);

  return traffic;
}