import {gql} from '@apollo/client';

export const GET_CITY = gql`
  fragment FragmentCity on Country {
    name
    native
    capital
    emoji
    currency
  }
  query Query($code: ID!) {
    country(code: $code) {
      ...FragmentCity
      languages {
        code
        name
      }
    }
  }
`;

export const GET_Launches = gql`
  query Launches {
    launches {
      mission_name
      mission_id
      rocket {
        rocket_name
        rocket {
          company
          name
          mass {
            kg
          }
        }
      }
      launch_site {
        site_name
      }
      launch_date_local
    }
  }
`;

// query Launches {
//     launches {
//       mission_name
//       mission_id
//       rocket {
//         rocket_name
//         rocket {
//           company
//           name
//           mass {
//             kg
//           }
//         }
//       }
//       launch_site {
//         site_name
//       }
//       launch_date_local
//     }
//   }
