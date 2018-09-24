import { caniuseData2 } from '../types/mainData.types';

export const covertoBrowserfulData2 = (data: caniuseData2) => {
  return Object.keys(data.agents).map(agent => {
    const versionList = data.agents[agent].version_list.map(keys => {
      return {
        ...keys,
        isIncluded: false,
        always: false
      };
    });

    return {
      ...versionList,
      totalVersions: data.agents[agent].version_list.length
    };
  });
};
