import type { PluginExtensionAddedLinkConfig, PluginExtensionExposedComponentConfig } from '@grafana/data';
import { PluginExtensionAddedComponentConfig } from '@grafana/data/src/types/pluginExtensions';
import type { AppPluginConfig } from '@grafana/runtime';
import { getPluginSettings } from 'app/features/plugins/pluginSettings';

import { importAppPlugin } from './plugin_loader';

export type PluginPreloadResult = {
  pluginId: string;
  error?: unknown;
  exposedComponentConfigs: PluginExtensionExposedComponentConfig[];
  addedComponentConfigs?: PluginExtensionAddedComponentConfig[];
  addedLinkConfigs?: PluginExtensionAddedLinkConfig[];
};

// The list of already preloaded plugin ids.
// (We only want to preload plugins once, as we would like to avoid error messages caused by
// registering extensions multiple times.)
const preloadedPluginsCache = new Set<string>();

export async function preloadPlugins(apps: AppPluginConfig[] = []) {
  const isNotYetPreloaded = ({ id }: AppPluginConfig) => !preloadedPluginsCache.has(id);
  const appPluginsToPreload = apps.filter(isNotYetPreloaded);

  if (appPluginsToPreload.length === 0) {
    return;
  }

  appPluginsToPreload.forEach(({ id }) => preloadedPluginsCache.add(id));

  await Promise.all(appPluginsToPreload.map(preload));
}

async function preload(config: AppPluginConfig) {
  try {
    const meta = await getPluginSettings(config.id);

    await importAppPlugin(meta);
  } catch (error) {
    console.error(`[Plugins] Failed to preload plugin: ${config.path} (version: ${config.version})`, error);
  }
}
