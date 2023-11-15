import { fetchAPI } from './base';

export async function getProjects(first = 4) {
  const data = await fetchAPI(
    `query FetchProjects($first: Int = 4) {
        posts(first: $first) {
          nodes {
            excerpt
            title
            uri
            featuredImage {
              node {
                altText
                sourceUrl(size: LARGE)
              }
            }
          }
        }
      }`,
    {
      variables: {
        first,
      },
    }
  );

  return data?.posts?.nodes;
}
