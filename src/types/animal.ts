export interface Animal {
  slug: string;
  breed: string;
  breedOrigination: string;
  friendliness: 1 | 2 | 3 | 4 | 5;
  shedding: 1 | 2 | 3 | 4 | 5;
  lifespanLowEnd: number;
  lifespanHighEnd: number;
  story: any;
  description?: {
    description?: string;
  };
  image: any;
}
