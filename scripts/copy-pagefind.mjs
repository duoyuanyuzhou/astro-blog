// 跨平台复制 Pagefind 索引到 public/，替代 POSIX 的 `cp -r`（Windows 下不可用）。
// 运行时机：astro build + pagefind 生成 dist/pagefind 之后。
import { cpSync, rmSync } from "node:fs";

const source = "dist/pagefind";
const dest = "public/pagefind";

rmSync(dest, { recursive: true, force: true });
cpSync(source, dest, { recursive: true });

console.log(`Copied ${source} → ${dest}`);
