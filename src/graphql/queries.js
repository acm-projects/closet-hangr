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
        publicKey
        type
        topOrBottom
        isForCold
        isForModerate
        isForHot
        primaryColor
        secondaryColor
        colorName
      }
      nextToken
    }
    outfits {
      items {
        id
        dummy
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
    publicKey
    type
    topOrBottom
    isForCold
    isForModerate
    isForHot
    primaryColor
    secondaryColor
    colorName
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
      publicKey
      type
      topOrBottom
      isForCold
      isForModerate
      isForHot
      primaryColor
      secondaryColor
      colorName
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
export const getOutfitClothing = `query GetOutfitClothing($id: ID!) {
  getOutfitClothing(id: $id) {
    id
    clothing {
      id
      key
      publicKey
      type
      topOrBottom
      isForCold
      isForModerate
      isForHot
      primaryColor
      secondaryColor
      colorName
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
    outfit {
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
      dummy
    }
  }
}
`;
export const listOutfitClothings = `query ListOutfitClothings(
  $filter: ModelOutfitClothingFilterInput
  $limit: Int
  $nextToken: String
) {
  listOutfitClothings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      clothing {
        id
        key
        publicKey
        type
        topOrBottom
        isForCold
        isForModerate
        isForHot
        primaryColor
        secondaryColor
        colorName
      }
      outfit {
        id
        dummy
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
    dummy
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
      dummy
    }
    nextToken
  }
}
`;
