import { useEffect, useState } from 'react';

import { preloadPlugins } from '../pluginPreloader';

import { getAppPluginConfigs } from './utils';

export function useLoadAppPlugins(pluginIds: string[] = []): { isLoading: boolean } {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const appConfigs = getAppPluginConfigs(pluginIds);

    if (!appConfigs.length) {
      return;
    }

    setIsLoading(true);
    preloadPlugins(appConfigs).then(() => {
      setIsLoading(false);
    });
    // TODO: revisit this
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading };
}
