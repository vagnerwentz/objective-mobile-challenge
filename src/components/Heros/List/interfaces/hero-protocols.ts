export interface HeroListProtocol {
  data: {
    count: number;
    limit: number;
    offset: number;
    total: number;
    results: Array<{
      id: number;
      name: string;
      thumbnail: {
        path: string;
        extension: string;
      };
      events: {
        items: {
          name: string;
        }[]
      }
      series: {
        items: {
          name: string;
        }[]
      }
    }>
  }
};

export interface HeroIndexProtocol {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  }
};

export interface HeroContentProps {
  id: number;
  thumbnailURL: string;
  name: string;
}
