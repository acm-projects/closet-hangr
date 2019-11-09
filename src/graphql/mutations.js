/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createClothing = `mutation CreateClothing($input: CreateClothingInput!) {
  createClothing(input: $input) {
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
export const updateClothing = `mutation UpdateClothing($input: UpdateClothingInput!) {
  updateClothing(input: $input) {
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
export const deleteClothing = `mutation DeleteClothing($input: DeleteClothingInput!) {
  deleteClothing(input: $input) {
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
export const createOutfitClothing = `mutation CreateOutfitClothing($input: CreateOutfitClothingInput!) {
  createOutfitClothing(input: $input) {
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
export const updateOutfitClothing = `mutation UpdateOutfitClothing($input: UpdateOutfitClothingInput!) {
  updateOutfitClothing(input: $input) {
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
export const deleteOutfitClothing = `mutation DeleteOutfitClothing($input: DeleteOutfitClothingInput!) {
  deleteOutfitClothing(input: $input) {
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
export const createOutfit = `mutation CreateOutfit($input: CreateOutfitInput!) {
  createOutfit(input: $input) {
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
export const updateOutfit = `mutation UpdateOutfit($input: UpdateOutfitInput!) {
  updateOutfit(input: $input) {
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
export const deleteOutfit = `mutation DeleteOutfit($input: DeleteOutfitInput!) {
  deleteOutfit(input: $input) {
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
