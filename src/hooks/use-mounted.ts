'use client';

import { useSyncExternalStore } from 'react';

/**
 * Hook to check if component is mounted
 * Useful for preventing hydration mismatches
 * Uses useSyncExternalStore to avoid setState in effect
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    () => () => {}, // subscribe (no-op)
    () => true,     // getSnapshot (client)
    () => false     // getServerSnapshot (server)
  );
}
