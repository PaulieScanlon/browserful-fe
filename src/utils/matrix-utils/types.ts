// export interface IBrowserList {
//   [key: string]: {
//     friendlyName: string;
//     logo: string;
//     platform: string;
//     totalVersions: number;
//     includedVersions: number;
//     expandCard: boolean;
//     versions: IVersion;
//   };
// }

// export interface IVersionList {
//   [key: string]: any;
// }

export interface IVersion {
  query: string;
  name: string;
  version: string;
  isIncluded: boolean;
  hasOverride: boolean | string;
  platform: string;
}

// export interface INameList {
//   [key: string]: any;
// }
