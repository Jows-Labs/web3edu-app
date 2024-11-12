import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ul: ({ children }) => <ul className="mdx">{children}</ul>,
    ol: ({ children }) => <ol className="mdx">{children}</ol>,
    li: ({ children }) => <li className="mdx">{children}</li>,
    h1: ({ children }) => <h1 className="text-2xl text-neutral">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl text-neutral">{children}</h2>,
    a: ({ children, href, ...props }) => (
      <a className="mdx" target="_blank" href={href} {...props}>
        {children}
      </a>
    ),
    ...components,
  };
}
