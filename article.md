# 模板 markdown 示例

## 总览

**markdown** 有诸多方言。本项目则尽量贴近 [github flavored markdown](https://docs.github.com/en/get-started/writing-on-github) 的风格

**Markdown** has saviral varies. But this project tried to follow [Github Flavored Markdown](https://docs.github.com/en/get-started/writing-on-github)

## 块元素 block elements

### 标题

```markdown
# 一级标题 Headline 1
## 二级标题 Headline 2
### 三级标题 Headline 3
#### 四级标题 Headline 4
##### 五级标题 Headline 5
###### 六级标题 Headline 6
```

渲染效果：

# 一级标题 Headline 1
## 二级标题 Headline 2
### 三级标题 Headline 3
#### 四级标题 Headline 4
##### 五级标题 Headline 5
###### 六级标题 Headline 6

### 引用

> ## 被引用 be blockquoted
> 
> 引用正文
> same paragraph

> another paragraph

### 列表

- 列表 1
  - 缩进
- 列表 2

不支持有序与任务列表

### 代码块

```rust
fn main() {
  println!("hi")
}
```

行内代码块 `code`

### 表格

| 表头 1  | 表头 2 |
| ------- | ------ |
| Content | 内容   |
| Content | 内容   |

## 行元素 span elements

行元素被单独编写时作为块渲染。被写在某个块内部时则作为行内元素渲染

### 链接

[bilibili](https://www.bilibili.com)

### 图片

![委屈表情](http://localhost:3000/玛露委屈.png)

### 强调

- 正文，**强调**，*斜体*
- english, **bold**, *italic*, _italic_

GFM 风格会忽略单词中间的 `_`，因为它们通常用于代码或英文名中。例如：

> explain_content
>
> http_response

### 删除线

~~被删除啦~~
