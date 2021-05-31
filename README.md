# requires node js 12 and above

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# b-tree implementation in javascript

- https://levelup.gitconnected.com/building-a-b-tree-in-javascript-4482dee083cb

## notes

- every BTree has a root (BTreeNode)
- every BTreeNode has the following attributes:
  - leaf (boolean): is leaf or not
  - values (number[]): list of all values stored in order, so that `BTree.values[i] <= BTree.value[i+1]`
  - children (BTreeNode[]): list of sub-tree children
- 4 basic operations in a BTreeNode
- all of these functions keep the array of references of values as small as possible using array.splice() - array mutation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

### how to decide what order of btree

- when instantiating a btree, we need to decide what order (max num of keys per non-leaf child node).
- to pick one, we have to see where the btree lives on the storage device.
- the order picked is so that the resulting node is as large as possible while still fitting into the "block device page size"
- common block sizes for HDD (spinning disks) are 512 bytes, 1kb or 4kb
- for SSDs, a block size is 4KB in physical size (512KB logical size) - https://superuser.com/questions/976257/page-sizes-ssd

> Typically, you'd choose the order so that the resulting node is as large as possible while still fitting into the block device page size. If you're trying to build a B-tree for an on-disk database, you'd probably pick the order such that each node fits into a single disk page, thereby minimizing the number of disk reads and writes necessary to perform each operation. If you wanted to build an in-memory B-tree, you'd likely pick either the L2 or L3 cache line sizes as your target and try to fit as many keys as possible into a node without exceeding that size. In either case, you'd have to look up the specs to determine what size to use.

#### refs

- how to decide btree order: https://stackoverflow.com/questions/28677734/how-to-decide-order-of-b-tree
- block sizing in hdd vs ssd: https://superuser.com/questions/976271/ssd-block-sizing#:~:text=The%20smallest%20unit%20of%20an,a%20block%20contains%20512%20KB.
- logical vs physical sizes: http://grandperspectiv.sourceforge.net/HelpDocumentation/FileSizeMeasures.html#:~:text=Logical%20size%2C%20which%20corresponds%20to,the%20information%20in%20the%20file.&text=Physical%20size%2C%20which%20represents%20the,the%20way%20files%20are%20stored.
- ref: http://books.gigatux.nl/mirror/kerneldevelopment/0672327201/ch13lev1sec1.html#:~:text=The%20kernel%20also%20requires%20that,1%20kilobyte%2C%20and%204%20kilobytes.
- holy heckums ssds have different btrees: https://www.researchgate.net/publication/293476436_AS_B-tree_A_Study_of_an_Efficient_B-tree_for_SSDs
- interesting reads on how ssds change what is the most optimal way to store and retrieve data: https://softwareengineering.stackexchange.com/questions/114923/will-b-trees-and-other-data-structures-become-obsolete-with-the-advent-of-solid

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
