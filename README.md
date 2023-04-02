## 使い方

以下のような形式の配列を準備する

```typescript
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
```

上記を変換して以下のようにblockIdごとに要素をまてめた配列を作成する。

```typescript 
[
    {
        blockId: 'test-block-001',
        contents: [
            {
            id: 'test-comment-001',
            text: 'comment',
            status: 'open',
            sourceId: '',
            userId: 'test-user-001'
            },
            {
            id: 'test-comment-002',
            text: 'comment2',
            status: 'open',
            sourceId: 'test-comment-001',
            userId: 'test-user-002'
            }
        ]
    },
    {・・・}
]
```