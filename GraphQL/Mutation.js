import {gql} from '@apollo/client';

export const ADD_FRUIT = gql`
  mutation addFruit(
    $id: ID!
    $scientific_name: String!
    $tree_name: String!
    $fruit_name: String!
    $description: String!
    $family: String!
    $origin: String!
    $bloom: String!
    $maturation_fruit: String!
    $life_cycle: String!
    $climatic_zone: String!
  ) {
    addFruit(
      id: $id
      scientific_name: $scientific_name
      tree_name: $tree_name
      fruit_name: $fruit_name
      family: $family
      origin: $origin
      description: $description
      bloom: $bloom
      maturation_fruit: $maturation_fruit
      life_cycle: $life_cycle
      climatic_zone: $climatic_zone
    ) {
      id
      scientific_name
      tree_name
      fruit_name
      family
      origin
      description
      bloom
      maturation_fruit
      life_cycle
      climatic_zone
    }
  }
`;
