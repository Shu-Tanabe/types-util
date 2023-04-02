interface BaseType {
  id: string;
  userId: string;
  blockId: string;
}

interface CommentType extends BaseType {
  text: string;
  status: "open" | "close";
  sourceId: string;
}

export type { BaseType, CommentType };
