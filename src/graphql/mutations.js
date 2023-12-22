/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHabit = /* GraphQL */ `
  mutation CreateHabit(
    $input: CreateHabitInput!
    $condition: ModelHabitConditionInput
  ) {
    createHabit(input: $input, condition: $condition) {
      id
      name
      count
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateHabit = /* GraphQL */ `
  mutation UpdateHabit(
    $input: UpdateHabitInput!
    $condition: ModelHabitConditionInput
  ) {
    updateHabit(input: $input, condition: $condition) {
      id
      name
      count
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteHabit = /* GraphQL */ `
  mutation DeleteHabit(
    $input: DeleteHabitInput!
    $condition: ModelHabitConditionInput
  ) {
    deleteHabit(input: $input, condition: $condition) {
      id
      name
      count
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
