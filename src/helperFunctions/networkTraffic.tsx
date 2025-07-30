import { useEffect, useState } from 'react';


export function useNetworkTraffic() {
  const [traffic, setTraffic] = useState<string[]>([]);

  useEffect(() => {
    // Process initial entries
    const initialEntries = performance.getEntriesByType('resource');
    const initialTraffic = initialEntries.map((entry) => {
      const resource = entry as PerformanceResourceTiming;
      return `${resource.name} - ${resource.initiatorType} - ${resource.duration.toFixed(2)}ms`;
    });
    setTraffic(initialTraffic);

    // Observe new entries
    const observer = new PerformanceObserver((list) => {
      const newEntries = list.getEntries();
      const newTraffic = newEntries.map((entry) => {
        const resource = entry as PerformanceResourceTiming;
        return `${resource.name} - ${resource.initiatorType} - ${resource.duration.toFixed(2)}ms`;
      });

      setTraffic((prev) => [...prev, ...newTraffic]);
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return traffic;
}