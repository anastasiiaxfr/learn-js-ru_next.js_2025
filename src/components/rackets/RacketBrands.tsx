import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getRacketsBrand } from "@/services/get-rackets-brand";

type Brand = {
  id: string;
  name: string;
};

export default async function RacketBrands() {
  const { data, isError } = (await getRacketsBrand()) as {
    data: Brand[];
    isError: boolean;
  };

  if (isError) {
    throw new Error("error");
  }

  if (!data) {
    return "Not Found";
  }

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose a brand" />
      </SelectTrigger>
      <SelectContent>
        {data.map((item: Brand) => (
          <SelectItem value={item.name} key={item.id}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
