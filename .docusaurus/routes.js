import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/mljourney/blog',
    component: ComponentCreator('/mljourney/blog', '30d'),
    exact: true
  },
  {
    path: '/mljourney/blog/archive',
    component: ComponentCreator('/mljourney/blog/archive', '487'),
    exact: true
  },
  {
    path: '/mljourney/blog/authors',
    component: ComponentCreator('/mljourney/blog/authors', '005'),
    exact: true
  },
  {
    path: '/mljourney/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/mljourney/blog/authors/all-sebastien-lorber-articles', '6ba'),
    exact: true
  },
  {
    path: '/mljourney/blog/authors/yangshun',
    component: ComponentCreator('/mljourney/blog/authors/yangshun', '5e9'),
    exact: true
  },
  {
    path: '/mljourney/blog/first-blog-post',
    component: ComponentCreator('/mljourney/blog/first-blog-post', '380'),
    exact: true
  },
  {
    path: '/mljourney/blog/long-blog-post',
    component: ComponentCreator('/mljourney/blog/long-blog-post', '39a'),
    exact: true
  },
  {
    path: '/mljourney/blog/mdx-blog-post',
    component: ComponentCreator('/mljourney/blog/mdx-blog-post', '682'),
    exact: true
  },
  {
    path: '/mljourney/blog/tags',
    component: ComponentCreator('/mljourney/blog/tags', '001'),
    exact: true
  },
  {
    path: '/mljourney/blog/tags/docusaurus',
    component: ComponentCreator('/mljourney/blog/tags/docusaurus', '7ba'),
    exact: true
  },
  {
    path: '/mljourney/blog/tags/facebook',
    component: ComponentCreator('/mljourney/blog/tags/facebook', '5c8'),
    exact: true
  },
  {
    path: '/mljourney/blog/tags/hello',
    component: ComponentCreator('/mljourney/blog/tags/hello', '45b'),
    exact: true
  },
  {
    path: '/mljourney/blog/tags/hola',
    component: ComponentCreator('/mljourney/blog/tags/hola', '474'),
    exact: true
  },
  {
    path: '/mljourney/blog/welcome',
    component: ComponentCreator('/mljourney/blog/welcome', '502'),
    exact: true
  },
  {
    path: '/mljourney/markdown-page',
    component: ComponentCreator('/mljourney/markdown-page', '2f9'),
    exact: true
  },
  {
    path: '/mljourney/docs',
    component: ComponentCreator('/mljourney/docs', '8de'),
    routes: [
      {
        path: '/mljourney/docs',
        component: ComponentCreator('/mljourney/docs', '1ac'),
        routes: [
          {
            path: '/mljourney/docs',
            component: ComponentCreator('/mljourney/docs', '15b'),
            routes: [
              {
                path: '/mljourney/docs/category/tutorial---basics',
                component: ComponentCreator('/mljourney/docs/category/tutorial---basics', '359'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney/docs/category/tutorial---extras',
                component: ComponentCreator('/mljourney/docs/category/tutorial---extras', '1c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney/docs/intro',
                component: ComponentCreator('/mljourney/docs/intro', '62c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/mljourney/docs/tutorial-basics/congratulations', '562'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/mljourney/docs/tutorial-basics/create-a-blog-post', 'e60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/mljourney/docs/tutorial-basics/create-a-document', '0ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/mljourney/docs/tutorial-basics/create-a-page', 'adb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/mljourney/docs/tutorial-basics/deploy-your-site', '698'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/mljourney/docs/tutorial-basics/markdown-features', '57a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/mljourney/docs/tutorial-extras/manage-docs-versions', '944'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mljourney/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/mljourney/docs/tutorial-extras/translate-your-site', '1cb'),
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
    path: '/mljourney/',
    component: ComponentCreator('/mljourney/', '7c7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
