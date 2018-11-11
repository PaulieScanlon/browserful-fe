import { caniuseData2 } from '../types/mainData.types';

export const coverToBrowserfulData2 = (data: caniuseData2) => {
  const updatedAgents = new Object();

  Object.keys(data.agents).forEach(agent => {
    updatedAgents[agent] = {
      ...data.agents[agent],
      version_list: data.agents[agent].version_list.map(keys => {
        return {
          ...keys,
          isIncluded: false,
          always: false
        };
      }),
      totalVersions: data.agents[agent].version_list.length,
      isExpanded: true
    };
  });

  // @TODO type the return as browserfulData2
  return {
    agents: updatedAgents as any
  };
};