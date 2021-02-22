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

export interface MarvelHeroShowCharacter {
  data: {
    results: {
      id: number
      name: string
      description: string
      thumbnail: {
        path: string
        extension: string
      }
      comics: {
        available: number
        items: {
          resourceURI: string
          name: string
        }[]
      }
      events: {
        available: number
        items: {
          resourceURI: string
          name: string
        }[]
      }
      series: {
        available: number
        items: {
          resourceURI: string
          name: string
        }[]
      }
      stories: {
        available: number
        items: {
          resourceURI: string
          name: string
        }[]
      }
    }[]
  }
}

export interface HeroIndexProtocol {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    items: {
      resourceURI: string;
      name: string;
    }[]
  }
  events: {
    available: number;
    items: {
      resourceURI: string;
      name: string;
    }[]
  }
  series: {
    available: number;
    items: {
      resourceURI: string;
      name: string;
    }[]
  }
  stories: {
    available: number;
    items: {
      resourceURI: string;
      name: string;
    }[]
  }
};

export interface ContentApperedProps {
  available: number;
  items: {
    resourceURI: string;
    name: string;
  }[]
}

export interface HeroDetail {
  route: {
    params: {
      id: number;
      name: string;
      description: string;
      thumbnail: {
        path: string;
        extension: string;
      };
      comics: ContentApperedProps;
      events: ContentApperedProps;
      series: ContentApperedProps;
      stories: ContentApperedProps;
    }
  }
};

export interface HeroContentProps {
  data: HeroIndexProtocol;
}
