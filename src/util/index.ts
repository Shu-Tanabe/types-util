import { BaseType } from "@/models/comment";

export const mapFromArray = <T extends BaseType>(arr: T[]) => {
  const map = new Map<
    string,
    {
      blockId: string;
      contents: Omit<T, "blockId">[];
    }
  >();

  arr.forEach((elm) => {
    const { blockId, ...rest } = elm;
    let BlockMapElm = map.get(blockId);
    if (!BlockMapElm) {
      BlockMapElm = { blockId, contents: [] };
      map.set(blockId, BlockMapElm);
    }
    BlockMapElm.contents.push(rest);
  });

  const newArr = Array.from(map.values());
  return newArr;
};
