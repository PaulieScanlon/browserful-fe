interface canIuseVersionList {
  version?: string;
  global_usage?: number;
  release_date?: number;
  era?: number;
  prefix?: string;
}

interface browserfulVersionList extends canIuseVersionList {
  isIncluded: boolean;
  always: boolean;
}

export interface caniuseData2 {
  agents: [
    {
      browser: string;
      abbr?: string;
      prefix?: string;
      type?: string;
      usage_global?: any;
      version_list?: canIuseVersionList[];
      current_version?: string;
    }
  ];
}

export interface browserfulData2 extends caniuseData2 {
  version_list: browserfulVersionList[];
  totalVersions?: number;
}
