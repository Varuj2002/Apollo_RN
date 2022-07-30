import {gql} from '@apollo/client';

export const GET_CITY = gql`
  query Query {
    country(code: "BR") {
      name
      native
      capital
      emoji
      currency
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
