/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    firstName
    lastName
    sex
    clothing {
      items {
        id
        key
        type
        topOrBottom
        isForCold
        isForModerate
        isForHot
        primaryColor
        secondaryColor
      }
      nextToken
    }
    outfits {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      firstName
      lastName
      sex
      clothing {
        nextToken
      }
      outfits {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getClothing = `query GetClothing($id: ID!) {
  getClothing(id: $id) {
    id
    key
    type
    topOrBottom
    isForCold
    isForModerate
    isForHot
    primaryColor
    secondaryColor
    user {
      id
      username
      firstName
      lastName
      sex
      clothing {
        nextToken
      }
      outfits {
        nextToken
      }
    }
    outfits {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listClothings = `query ListClothings(
  $filter: ModelClothingFilterInput
  $limit: Int
  $nextToken: String
) {
  listClothings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      key
      type
      topOrBottom
      isForCold
      isForModerate
      isForHot
      primaryColor
      secondaryColor
      user {
        id
        username
        firstName
        lastName
        sex
      }
      outfits {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getOutfit = `query GetOutfit($id: ID!) {
  getOutfit(id: $id) {
    id
    user {
      id
      username
      firstName
      lastName
      sex
      clothing {
        nextToken
      }
      outfits {
        nextToken
      }
    }
    clothing {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listOutfits = `query ListOutfits(
  $filter: ModelOutfitFilterInput
  $limit: Int
  $nextToken: String
) {
  listOutfits(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
        id
        username
        firstName
        lastName
        sex
      }
      clothing {
        nextToken
      }
    }
    nextToken
  }
}
`;
