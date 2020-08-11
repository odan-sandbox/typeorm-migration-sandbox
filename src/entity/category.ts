import { EntitySchema } from "typeorm";

export interface Category {
  id: number;
  name: string;
  status: string;
}

export const CategoryEntity = new EntitySchema<Category>({
  name: "category",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    status: {
      type: String,
    },
  },
});
