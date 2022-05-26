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
                  buildHookId: '628f3f147ac0603b4bc929f9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-oddbox-landing-studio',
                  apiId: '7ab1c031-6015-4553-859d-289d928d1879'
                },
                {
                  buildHookId: '628f3f143848773ec9e62e5c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-oddbox-landing',
                  apiId: '8489999e-b3eb-4e4a-ac93-eb887b4137b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mgerasika/sanity-gatsby-oddbox-landing',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-oddbox-landing.netlify.app',
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
