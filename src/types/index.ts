export interface Passage {
  id: string;
  chapter: number;
  verse: number;
  chinese: string;
  korean: string;
  themes: string[];
}

export interface Chapter {
  id: number;
  title: {
    chinese: string;
    korean: string;
  };
  passages: Passage[];
}

export interface Theme {
  id: string;
  name: {
    chinese: string;
    korean: string;
  };
  description: string;
} 