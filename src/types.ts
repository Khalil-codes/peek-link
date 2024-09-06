export interface Meta {
  title: string;
  description: string;
  hostname: string;
  favicon: string;
  og: OpenGraph;
  twitter: OpenGraph;
}

export interface OpenGraph {
  image: string;
  title: string;
  description: string;
}
