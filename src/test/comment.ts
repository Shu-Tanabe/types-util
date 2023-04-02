import { CommentType } from "@/models/comment";

const comments: CommentType[] = [
  {
    id: "test-comment-001",
    text: "comment",
    status: "open",
    sourceId: "",
    userId: "test-user-001",
    blockId: "test-block-001",
  },
  {
    id: "test-comment-002",
    text: "comment2",
    status: "open",
    sourceId: "test-comment-001",
    userId: "test-user-002",
    blockId: "test-block-001",
  },
  {
    id: "test-comment-003",
    text: "comment",
    status: "open",
    sourceId: "",
    userId: "test-user-003",
    blockId: "test-block-002",
  },
];

export { comments };
