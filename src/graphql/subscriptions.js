/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateClothing = `subscription OnCreateClothing {
  onCreateClothing {
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
export const onUpdateClothing = `subscription OnUpdateClothing {
  onUpdateClothing {
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
export const onDeleteClothing = `subscription OnDeleteClothing {
  onDeleteClothing {
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
export const onCreateOutfitClothing = `subscription OnCreateOutfitClothing {
  onCreateOutfitClothing {
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
export const onUpdateOutfitClothing = `subscription OnUpdateOutfitClothing {
  onUpdateOutfitClothing {
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
export const onDeleteOutfitClothing = `subscription OnDeleteOutfitClothing {
  onDeleteOutfitClothing {
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
export const onCreateOutfit = `subscription OnCreateOutfit {
  onCreateOutfit {
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
export const onUpdateOutfit = `subscription OnUpdateOutfit {
  onUpdateOutfit {
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
export const onDeleteOutfit = `subscription OnDeleteOutfit {
  onDeleteOutfit {
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
