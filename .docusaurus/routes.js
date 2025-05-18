import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/mljourney.github.io/blog',
    component: ComponentCreator('/mljourney.github.io/blog', 'a4f'),
    exact: true
  },
  {
    path: '/mljourney.github.io/blog/archive',
    component: ComponentCreator('/mljourney.github.io/blog/archive', 'ea9'),
    exact: true
  },
  {
    path: '/mljourney.github.io/blog/authors',
    component: ComponentCreator('/mljourney.github.io/blog/authors', '6ff'),
    exact: true
  },
  {
    path: '/mljourney.github.io/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/mljourney.github.io/blog/authors/all-sebastien-lorber-articles', '7d5'),
    exact: true
  },
  {
    path: '/mljourney.github.io/blog/authors/yangshun',
    component: ComponentCreator('/mljourney.github.io/blog/authors/yangshun', '912'),
    exact: true
  },
  {
    path: '/mljourney.github.io/blog/first-blog-post',
    component: ComponentCreator('/mljourney.github.io/blog/first-blog-post', 'c71'),
    exact: true
  },
  {
    path: '/mljourney.github.io/blog/long-blog-post',
    component: ComponentCreator('/mljourney.github.io/blog/long-blog-post', '7db'),
    exact: true
  },
  {
    path: '/mljourney.github.io/blog/mdx-blog-post',
    component: ComponentCreator('/mljourney.github.io/blog/mdx-blog-post', '786'),
    exact: true
  },
  {
    path: '/mljourney.github.io/blog/tags',
    component: ComponentCreator('/mljourney.github.io/blog/tags', '38c'),
    exact: true
  },
  {
    path: '/mljourney.github.io/blog/tags/docusaurus',
    component: ComponentCreator('/mljourney.github.io/blog/tags/docusaurus', 'ea9'),
    exact: true
  },
  {
    path: '/mljourney.github.io/blog/tags/facebook',
    component: ComponentCreator('/mljourney.github.io/blog/tags/facebook', '84a'),
    exact: true
  },
  {
    path: '/mljourney.github.io/blog/tags/hello',
    component: ComponentCreator('/mljourney.github.io/blog/tags/hello', 'e9a'),
    exact: true
  },
  {
    path: '/mljourney.github.io/blog/tags/hola',
    component: ComponentCreator('/mljourney.github.io/blog/tags/hola', 'cec'),
    exact: true
  },
  {
    path: '/mljourney.github.io/blog/welcome',
    component: ComponentCreator('/mljourney.github.io/blog/welcome', '1f2'),
    exact: true
  },
  {
    path: '/mljourney.github.io/markdown-page',
    component: ComponentCreator('/mljourney.github.io/markdown-page', 'e16'),
    exact: true
  },
  {
    path: '/mljourney.github.io/docs',
    component: ComponentCreator('/mljourney.github.io/docs', 'ac5'),
    routes: [
      {
        path: '/mljourney.github.io/docs',
        component: ComponentCreator('/mljourney.github.io/docs', '51c'),
        routes: [
          {
            path: '/mljourney.github.io/docs',
            component: ComponentCreator('/mljourney.github.io/docs', '61a'),
            routes: [
              {
                path: '/mljourney.github.io/docs/category/tutorial---basics',
                component: ComponentCreator('/mljourney.github.io/docs/category/tutorial---basics', 'ea3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney.github.io/docs/category/tutorial---extras',
                component: ComponentCreator('/mljourney.github.io/docs/category/tutorial---extras', 'ec5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney.github.io/docs/intro',
                component: ComponentCreator('/mljourney.github.io/docs/intro', '251'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney.github.io/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/mljourney.github.io/docs/tutorial-basics/congratulations', '240'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney.github.io/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/mljourney.github.io/docs/tutorial-basics/create-a-blog-post', '2f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney.github.io/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/mljourney.github.io/docs/tutorial-basics/create-a-document', 'd78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney.github.io/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/mljourney.github.io/docs/tutorial-basics/create-a-page', 'ac4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney.github.io/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/mljourney.github.io/docs/tutorial-basics/deploy-your-site', '963'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney.github.io/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/mljourney.github.io/docs/tutorial-basics/markdown-features', 'fb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney.github.io/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/mljourney.github.io/docs/tutorial-extras/manage-docs-versions', '0aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney.github.io/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/mljourney.github.io/docs/tutorial-extras/translate-your-site', 'e26'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/mljourney.github.io/',
    component: ComponentCreator('/mljourney.github.io/', '1d2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
