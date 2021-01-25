export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600e13cc107a94cac733ee55',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-or6184jx',
                  apiId: 'f55b842c-23b1-467d-a6b5-e12eaa03f79c'
                },
                {
                  buildHookId: '600e13ccbc194e47eaad7bf7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zo7j843o',
                  apiId: 'ce342a96-e5f8-4839-9ddb-409779127cab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vincent-lee-gh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-zo7j843o.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
