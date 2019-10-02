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
        type
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
    photo {
      id
      clothing {
        id
        type
        primaryColor
        secondaryColor
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
    }
    type
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
      photo {
        id
        bucket
      }
      type
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
export const getPhoto = `query GetPhoto($id: ID!) {
  getPhoto(id: $id) {
    id
    clothing {
      id
      photo {
        id
        bucket
      }
      type
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
    bucket
    fullsize {
      key
      width
      height
    }
    thumbnail {
      key
      width
      height
    }
  }
}
`;
export const listPhotos = `query ListPhotos(
  $filter: ModelPhotoFilterInput
  $limit: Int
  $nextToken: String
) {
  listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      clothing {
        id
        type
        primaryColor
        secondaryColor
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
    }
    nextToken
  }
}
`;
