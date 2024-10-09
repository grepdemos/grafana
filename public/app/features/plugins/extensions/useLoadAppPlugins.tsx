import { useEffect, useState } from 'react';

import { preloadPlugins } from '../pluginPreloader';

import { getAppPluginConfigs } from './utils';

export function useLoadAppPlugins(pluginIds: string[] = []): { isLoading: boolean } {
  const [isLoading, setIsLoading] = useState(true);
  const appConfigs = getAppPluginConfigs(pluginIds);

  useEffect(() => {
    if (!appConfigs.length) {
      return;
    }

    setIsLoading(true);
    preloadPlugins(appConfigs).then(() => {
      setIsLoading(false);
    });
  }, [appConfigs]);

  return { isLoading };
}
