export interface IVersion {
  name: string;
  query: string;
  version: string;
  isIncluded: boolean;
  hasOverride: boolean | string;
}
